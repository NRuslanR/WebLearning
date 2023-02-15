const { gql } = require("graphql-modules");

export const usersQueriesDef = gql`

    extend type Query {

        users: [User]
        userById(input: FindUserByIdInput!): User!
    }

`