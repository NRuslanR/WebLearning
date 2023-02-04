import { gql } from 'graphql-modules';

export const postQueriesDef = gql`

    type Query {

        posts: [Post]
        postById(input: FindPostByIdInput!): Post

    }
`;