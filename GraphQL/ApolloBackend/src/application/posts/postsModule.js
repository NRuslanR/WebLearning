import { postTypesDef } from './data/types/postTypes.js';
import { postTypesResolvers } from './data/resolvers/postTypesResolvers.js';
import { postQueriesDef } from './data/queries/postQueries.js';
import { postQueriesInputsDef } from './data/queries/inputs/postQueriesInputs.js';
import { postMutations } from './data/mutations/postMutations.js';
import { postMutationsInputs } from './data/mutations/inputs/postMutationsInputs.js';
import { createModule } from 'graphql-modules';
import { PostsService } from './services/postsService.js';

export const PostsModule =
    createModule({
        id: 'posts',
        typeDefs: [
            postTypesDef, 
            postQueriesDef, postQueriesInputsDef, 
            postMutations, postMutationsInputs
        ],
        resolvers: [
            postTypesResolvers
        ],
        providers: [
            PostsService
        ]
    });

