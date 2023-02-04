import { gql } from 'graphql-modules';

export const postTypesDef = gql` 

    type Post {

        id: ID!
        name: String!
        content: String!
        comments: [Comment]
        author: User!
    }

    type Comment {

        id: ID!
        text: String!
        author: User!

    }
`;