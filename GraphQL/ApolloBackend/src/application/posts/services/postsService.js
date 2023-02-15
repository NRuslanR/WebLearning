"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = exports.CommentAuhorNotFoundError = exports.PostNotFoundError = exports.PostAuthorNotFoundError = exports.PostsServiceInputError = exports.PostsServiceError = void 0;
const graphql_modules_1 = require("graphql-modules");
const sequelize_1 = require("sequelize");
const init_js_1 = require("../../shared/store/init.js");
const usersServices_1 = require("../../users/services/usersServices");
const index_js_1 = require("../../users/store/models/index.js");
class PostsServiceError extends Error {
}
exports.PostsServiceError = PostsServiceError;
class PostsServiceInputError extends PostsServiceError {
}
exports.PostsServiceInputError = PostsServiceInputError;
class PostAuthorNotFoundError extends PostsServiceInputError {
}
exports.PostAuthorNotFoundError = PostAuthorNotFoundError;
class PostNotFoundError extends PostsServiceInputError {
}
exports.PostNotFoundError = PostNotFoundError;
class CommentAuhorNotFoundError extends Error {
}
exports.CommentAuhorNotFoundError = CommentAuhorNotFoundError;
let PostsService = class PostsService {
    usersService;
    connection;
    models;
    selectPostOptions;
    constructor(usersService) {
        this.usersService = usersService;
        this.connection = init_js_1.DataStore.getCurrent().getConnection();
        this.models = init_js_1.DataStore.getCurrent().getModels();
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
        };
    }
    async getAllPosts() {
        const { Post, Comment, User } = this.models;
        return await Post.findAll(this.selectPostOptions);
    }
    async getPostById(postId) {
        return await this.findPostByIdOrThrow(postId);
    }
    async createPost(data) {
        let post;
        await this.connection.transaction(async (t) => {
            const author = await this.findUserByIdOrThrow(data.authorId, new PostAuthorNotFoundError('Auhor not found'));
            post = await this.models.Post.create({
                name: data.name,
                content: data.content
            });
            await post.setPostAuthor(author);
        });
        return post;
    }
    async findUserByIdOrThrow(userId, error) {
        try {
            return this.usersService.getUserById(userId);
        }
        catch (err) {
            throw error ? error : err;
        }
    }
    async updatePost(data) {
        let post = await this.findPostByIdOrThrow(data.id);
        post.set({
            name: data.name,
            content: data.content
        });
        await post.save();
        return post;
    }
    async removePost(postId) {
        const post = await this.models.Post.findByPk(postId);
        if (post)
            await post.destroy();
    }
    async putComments(postId, commentInfos) {
        let commentsAuthorsFetcher = models => Promise.all(models.map(model => this.findUserByIdOrThrow(model.authorId, new CommentAuhorNotFoundError('Comment author not found')))), commentInfosToModelsMapper = infos => infos, commentModelsToDtosMapper = async (models) => (await commentsAuthorsFetcher(models)).map(author => {
            let { id, text } = models.find(model => model.authorId == author.id);
            return { id, text, commentAuthor: author };
        }), commentModels;
        await this.connection.transaction(async (t) => {
            let post = await this.findPostByIdOrThrow(postId);
            commentModels =
                await this.models.Comment.bulkCreate(commentInfosToModelsMapper(commentInfos));
            await post.addComments(commentModels);
        });
        return await commentModelsToDtosMapper(commentModels);
    }
    async updateComments(postId, commentsChangesList) {
        let comments;
        await this.connection.transaction(async (t) => {
            comments =
                await this.findAllPostComments(postId, commentsChangesList.map(commentChanges => commentChanges.commentId));
            await Promise.all(comments.map(comment => {
                const { text } = commentsChangesList.find(item => item.commentId == comment.id);
                comment.set({
                    text
                });
                return comment.save();
            }));
        });
        return comments;
    }
    async removeComments(postId, commentIds) {
        let comments;
        await this.connection.transaction(async (t) => {
            let post = await this.findPostByIdOrThrow(postId);
            comments = await this.findAllPostComments(postId, commentIds);
            await post.removeComments(comments);
        });
        return comments;
    }
    async findAllPostComments(postId, commentIds) {
        let selectOptions = {
            include: [
                {
                    model: index_js_1.User,
                    as: 'commentAuthor'
                }
            ],
            where: {
                postId,
                id: commentIds ?? { [sequelize_1.Op.not]: null }
            }
        };
        return await this.models.Comment.findAll(selectOptions);
    }
    async findPostByIdOrThrow(postId) {
        const post = await this.models.Post.findByPk(postId, this.selectPostOptions);
        if (!post) {
            throw new PostNotFoundError("Post not found");
        }
        return post;
    }
};
PostsService = __decorate([
    (0, graphql_modules_1.Injectable)({
        scope: graphql_modules_1.Scope.Singleton
    }),
    __metadata("design:paramtypes", [usersServices_1.UsersService])
], PostsService);
exports.PostsService = PostsService;
