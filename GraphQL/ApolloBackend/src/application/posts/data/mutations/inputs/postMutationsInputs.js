import { gql } from 'graphql-modules';

export const postMutationsInputs = gql`

    input CreatePostInput {

        name: String!
        content: String!
        authorId: ID!
    }

    input UpdatePostInput {

        name: String
        content: String

    }

    input RemovePostInput {

        postId: ID!
    }

    input AddCommentInput
    {
        text: String!
        authorId: ID!
    }

    input UpdateCommentInput
    {
        commentId: ID!
        text: String!
    }

    input AddPostCommentsInput {

        postId: ID!
        comments: [AddCommentInput!]!
    }

    input UpdatePostCommentsInput {

        postId: ID!
        comments: [UpdateCommentInput!]!
    }

    input RemovePostCommentsInput {
        postId: ID!
        commentIds: [ID!]
    }

    type CommentsOutput
    {
        postId: ID!
        comments: [Comment!]!
    }
`;