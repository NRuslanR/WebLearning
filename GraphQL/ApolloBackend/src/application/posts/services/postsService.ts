import { Injectable, Scope } from 'graphql-modules';
import { Identifier, Model, Op, Sequelize } from 'sequelize';
import { DataStore } from '../../shared/store/init.js';
import { Comment, Post } from '../store/models/index.js';
import { UsersService } from '../../users/services/usersServices';
import { User } from '../../users/store/models/index.js';

export class PostsServiceError extends Error  {}
export class PostsServiceInputError extends PostsServiceError {}
export class PostAuthorNotFoundError extends PostsServiceInputError {}
export class PostNotFoundError extends PostsServiceInputError {}
export class CommentAuhorNotFoundError extends Error {}

@Injectable({
    scope: Scope.Singleton
})
export class PostsService
{
    private connection: Sequelize;
    private models: any;
    private selectPostOptions;
    
    constructor(private usersService: UsersService)
    {
        this.connection = DataStore.getCurrent().getConnection();
        this.models = DataStore.getCurrent().getModels();

        const { Comment, User } = this.models;

        this.selectPostOptions = {
            include: [
                {
                    model: Comment,
                    as: 'comments',
                    include: {
                        model: User,
                        as: 'commentAuthor'
                    }
                },
                {
                    model: User,
                    as: 'postAuthor'
                }
            ]
        }
    }

    async getAllPosts(): Promise<Post[]> {
      
        const { Post, Comment, User } = this.models;

        return await Post.findAll(this.selectPostOptions);
    }

    async getPostById(postId: Identifier): Promise<Post> {

        return await this.findPostByIdOrThrow(postId);
    }

    async createPost(data): Promise<Post>
    {
        let post;

        await this.connection.transaction(async t => {

            const author = 
                await this.findUserByIdOrThrow(
                    data.authorId,
                    new PostAuthorNotFoundError('Auhor not found')
                );

            post = await this.models.Post.create({
                name: data.name,
                content: data.content
            });

            await post.setPostAuthor(author);
        });

        return post;
    } 

    private async findUserByIdOrThrow(userId: Identifier, error?: Error): Promise<User>
    {
        try
        {
            return this.usersService.getUserById(userId);
        }

        catch (err)
        {
            throw error ? error : err;
        }
    }
    
    async updatePost(data): Promise<Post> 
    {
        let post = await this.findPostByIdOrThrow(data.id);

        post.set({
            name: data.name,
            content: data.content
        });

        await post.save();

        return post;
    }

    async removePost(postId): Promise<void>
    {
        const post = await this.models.Post.findByPk(postId);

        if (post)
            await post.destroy();
    }

    async putComments(postId: Identifier, commentInfos: any): Promise<any[]>
    {
        let 
            commentsAuthorsFetcher = models => 
                Promise.all(
                    models.map(
                        model => this.findUserByIdOrThrow(
                            model.authorId,
                            new CommentAuhorNotFoundError(
                                'Comment author not found'
                            )
                        )
                    )
                )
            , 
            commentInfosToModelsMapper = infos => infos,
            commentModelsToDtosMapper = 
                async (models) => 
                    (await commentsAuthorsFetcher(models)).map(
                        author => {
                            let { id, text } = 
                                models.find(model => model.authorId == author.id);

                            return { id, text, commentAuthor: author};
                        }
                    )
            , commentModels;
       
        await this.connection.transaction(async t => {

            let post: any = await this.findPostByIdOrThrow(postId);
             
            commentModels = 
                await this.models.Comment.bulkCreate(
                    commentInfosToModelsMapper(commentInfos)
                );
                
            await post.addComments(commentModels);
        });

        return await commentModelsToDtosMapper(commentModels);
    }

    async updateComments(postId: Identifier, commentsChangesList: any[]): Promise<any[]>
    {
        let comments;

        await this.connection.transaction(async t => {

            comments =
                await this.findAllPostComments(postId, 
                    commentsChangesList.map(
                        commentChanges => commentChanges.commentId
                    )
                );
                    
            await Promise.all(
                comments.map(comment => {

                    const { text } = 
                        commentsChangesList.find(item => item.commentId == comment.id);

                    comment.set({
                        text 
                    });

                    return comment.save();
                })
            );
        });

        return comments;
    }

    async removeComments(postId: Identifier, commentIds?: Identifier[]): Promise<any[]>
    {
        let comments;

        await this.connection.transaction(async t => {

            let post: any = await this.findPostByIdOrThrow(postId);
            
            comments = await this.findAllPostComments(postId, commentIds);

            await post.removeComments(comments);

        });

        return comments;
    }

    private async findAllPostComments(postId: Identifier, commentIds?: Identifier[]): Promise<Comment[]>
    {
        let selectOptions = {
            include: [
                {
                    model: User,
                    as: 'commentAuthor'
                }
            ],
            where: {
                postId,
                id: commentIds ?? { [Op.not]: null }
            }
        };

        return await this.models.Comment.findAll(selectOptions);
    }

    private async findPostByIdOrThrow(postId): Promise<Post>
    {
        const post = await this.models.Post.findByPk(postId, this.selectPostOptions);

        if (!post) {
            throw new PostNotFoundError("Post not found");
        }

        return post;
    }
}