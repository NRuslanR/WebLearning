import { PostsModule } from './posts/postsModule.js';
import { UsersModule } from './users/usersModule.js';
import { createApplication } from 'graphql-modules';

import { 
    DateResolver, DateTypeDefinition,
    DateTimeResolver, DateTimeTypeDefinition 
} from 'graphql-scalars';

export const createApplicationModule = 
    () => (
        createApplication({
            modules: [
                PostsModule, UsersModule
            ]
        })
    );