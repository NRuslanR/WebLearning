import { UsersService } from "../../services/usersServices";

export const usersTypesResolvers = {

    Query: {
        
        users: async (_, __, context) => {

            let userService = context.injector.get(UsersService);
            
            return await userService.getAllUsers();
        },

        userById: async(_, { input }, context) => {

            let userService = context.injector.get(UsersService);

            return await userService.getUserById(input.userId);
        }
    },

    User: {
        address: async (parent) => {

            return await parent.getAddress();
        }
    },
    
    Mutation: {
        
    }
}