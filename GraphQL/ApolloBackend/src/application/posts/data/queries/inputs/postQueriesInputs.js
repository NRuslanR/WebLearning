import { gql } from 'graphql-modules';

export const postQueriesInputsDef = gql`

    input FindPostByIdInput {
        postId: ID!
    }
`;