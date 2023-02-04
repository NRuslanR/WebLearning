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
`;