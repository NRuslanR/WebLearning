import { Injectable, Scope } from 'graphql-modules';
import { Identifier, Sequelize } from 'sequelize';
import { DataStore } from '../../shared/store/init.js';
import { Post } from '../store/models/index.js';

export class PostsServiceError extends Error  {}
export class PostsServiceInputError extends PostsServiceError {}
export class PostAuthorNotFoundError extends PostsServiceInputError {}
export class PostNotFoundError extends PostsServiceInputError {}

@Injectable({
    scope: Scope.Singleton 
})
export class PostsService
{
    private connection: Sequelize;
    private models: any;
    private selectPostOptions;

    constructor()
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
            
            const author = await this.models.User.findByPk(data.authorId);

            if (!author)
            {
                throw new PostAuthorNotFoundError('Auhor not found');
            }

            post = await this.models.Post.create({
                name: data.name,
                content: data.content
            });

            await post.setPostAuthor(author);

        });

        return post;
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

    private async findPostByIdOrThrow(postId): Promise<Post>
    {
        const post = await this.models.Post.findByPk(postId, this.selectPostOptions);

        if (!post) {
            throw new PostNotFoundError("Post not found");
        }

        return post;
    }
}