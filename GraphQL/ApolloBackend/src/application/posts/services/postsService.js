"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = exports.PostNotFoundError = exports.PostAuthorNotFoundError = exports.PostsServiceInputError = exports.PostsServiceError = void 0;
const graphql_modules_1 = require("graphql-modules");
const init_js_1 = require("../../shared/store/init.js");
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
let PostsService = class PostsService {
    connection;
    models;
    selectPostOptions;
    constructor() {
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
            const author = await this.models.User.findByPk(data.authorId);
            if (!author) {
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
    })
], PostsService);
exports.PostsService = PostsService;
