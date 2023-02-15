import { GraphQLError } from 'graphql';
import { PostAuthorNotFoundError, PostNotFoundError, PostsService, PostsServiceInputError } from '../../services/postsService.js'

export const postTypesResolvers = {

    Query: {

        posts: async (_, __, context ) => {
            
            const postsService = context.injector.get(PostsService);

            return await postsService.getAllPosts();
        },

        postById: async (_, { input }, context) => {

            const postsService = context.injector.get(PostsService);

            try
            {
                return await postsService.getPostById(input.postId);
            }

            catch(err)
            {
                if (err instanceof PostNotFoundError)
                {
                    throw new GraphQLError(
                        err.message,
                        {
                            extensions: {
                                code: 'BAD_USER_INPUT',
                                details: `${input.postId} is invalid post id`
                            }
                        }
                    ); 
                }

                throw err;
            }
        }

    },

    Post: {

        comments: (parent) => {

            return parent.comments;
        },

        author: (parent) => {

            return parent.postAuthor;

        }
    },

    Comment: {

        author: (parent) => {

            return parent.commentAuthor;
        }

    },

    Mutation: {

        createPost: async (_, { input }, context) => {
            
            const postsService = context.injector.get(PostsService);

            try
            {
                return await postsService.createPost(input);
            }

            catch(err)
            {
                if (err instanceof PostAuthorNotFoundError)
                {
                    throw new GraphQLError(
                        err.message,
                        {
                            extensions: {
                                code: 'BAD_USER_INPUT',
                                details: `${input.authorId} is invalid author id`
                            }
                        }
                    ); 
                }

                throw err;
            }
        },

        updatePost: async (_, { id, input }, context) => {

            const postsService = context.injector.get(PostsService);

            return await postsService.updatePost({
                id,
                ...input
            });

        },

        removePost: async (_, { input }, context) => {

            const postsService = context.injector.get(PostsService);

            await postsService.removePost(input.postId);

            return input.postId;
        },

        addComments: async (_, { input }, context) => {

            const postsService = context.injector.get(PostsService);

            return {
                postId: input.postId,
                comments: await postsService.putComments(input.postId, input.comments)
            };

        },

        updateComments: async (_, { input }, context) => {

            const postsService = context.injector.get(PostsService);

            return {
                postId: input.postId,
                comments: await postsService.updateComments(input.postId, input.comments)
            }
        },

        removeComments: async (_, { input }, context) => {

            const postsService = context.injector.get(PostsService);

            return {
                postId: input.postId,
                comments: await postsService.removeComments(input.postId, input.commentIds)
            };
        }
    },

};
