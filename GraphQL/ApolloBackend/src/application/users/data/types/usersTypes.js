import { gql } from 'graphql-modules';

export const usersTypesDef = gql`

    type User {

        id: ID!
        name: String!
        address: UserAddress!
        
    }

    type UserAddress {

        id: ID!
        city: String!
        street: String!
        room: String!
    }
`