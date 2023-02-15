import { gql } from 'graphql-modules';

export const postMutations = gql`

    type Mutation {

        createPost(input: CreatePostInput!): Post!
        updatePost(id: ID!, input: UpdatePostInput!): Post!
        removePost(input: RemovePostInput!): ID!
        
        addComments(input: AddPostCommentsInput!): CommentsOutput!
        updateComments(input: UpdatePostCommentsInput!): CommentsOutput!
        removeComments(input: RemovePostCommentsInput!): CommentsOutput!
    }

`;