const { gql } = require("graphql-modules");

export const usersQueriesInputsDef = gql`

    input FindUserByIdInput {
        userId: ID!
    }

`