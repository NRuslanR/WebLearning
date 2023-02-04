import "reflect-metadata"
import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { json } from 'body-parser';
import { createServer } from 'http';
import cors from 'cors';
import { createApplicationModule } from '../application/applicationModule.js';
import { DataStore } from '../application/shared/store/init.js';

(async () => {
    
    const 
        app = express(),
        httpServer = createServer(app),
        dataStore = 
            DataStore.asCurrent('posts', 'posts_user', '123456', { 
                transactionality: true
            });

    await dataStore.connect({ 
        syncModels: true
    });
    
    const
        applicationModule = createApplicationModule(),
        server = new ApolloServer({
            schema: applicationModule.createSchemaForApollo(),
            plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
            includeStacktraceInErrorResponses: false
        });

    await server.start();

    app.use(
        '/graphql', 
        cors({ origin: '*'}), 
        json(), 
        expressMiddleware(server)
    );

    const port = process.argv.length > 2 ? parseInt(process.argv[2]) : 8099;

    httpServer.listen(
        { port: port }, 
        () => console.log(`GraphQL Server ready at http://localhost:${port}`)
    );

})();
