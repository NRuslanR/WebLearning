import { usersTypesDef } from './data/types/usersTypes.js';
import { usersTypesResolvers } from './data/resolvers/usersTypesResolvers.js';
import { createModule } from 'graphql-modules';
import { usersQueriesDef } from './data/queries/usersQueries.js';
import { usersQueriesInputsDef } from './data/queries/inputs/usersQueriesInputs.js';
import { UsersService } from './services/usersServices.js';

export const UsersModule = 
    createModule({
        id: 'users',
        typeDefs: [
            usersTypesDef,
            usersQueriesDef, usersQueriesInputsDef
        ],
        resolvers: [
            usersTypesResolvers
        ],
        providers: [
            UsersService
        ]
    });