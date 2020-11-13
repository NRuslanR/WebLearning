const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`

    type Book {

        id: Int,
        title: String,
        author: String,
        publishingYear: Int
    }

    type Query {
        books: [Book]
    }
`;

const books = [

    {
        id: 1,
        title: "Brain's poorness",
        author: "Sergey Saveliev",
        publishingYear: 2014
    },
    {
        id: 2,
        title: "Domain-Driven Design",
        author: "Eric Evans",
        publishingYear: 2018
    },
    {
        id: 3,
        title: "Logic's science",
        author: "George Hegel",
        publishingYear: 1869
    }
];

const resolvers = {

    Query: {

        books: () => books
    }
};

var apolloServerConfiguration = { typeDefs, resolvers };

console.log(`Apollo Server Configuration:${JSON.stringify(apolloServerConfiguration)}`);

var apolloServer = new ApolloServer(apolloServerConfiguration);

apolloServer.listen().then(({ url }) => {

    console.log(`Server ready at ${url}`);

});