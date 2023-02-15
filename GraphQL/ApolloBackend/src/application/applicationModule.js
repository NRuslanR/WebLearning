import { PostsModule } from './posts/postsModule.js';
import { UsersModule } from './users/usersModule.js';
import { createApplication } from 'graphql-modules';


export const createApplicationModule = 
    () => (
        createApplication({
            modules: [
                UsersModule, PostsModule
            ]
        })
    );