import { Identifier, Sequelize } from "sequelize";
import { User } from "../store/models";
import { DataStore } from '../../shared/store/init';
import { Injectable, Scope } from "graphql-modules";

@Injectable({
    scope: Scope.Singleton
})
export class UsersService
{
    private connection: Sequelize;
    private userModel: any;

    constructor()
    {
        this.connection = DataStore.getCurrent().getConnection();
        this.userModel = <User>DataStore.getCurrent().getModels().User;
    }

    async getAllUsers(): Promise<User[]>
    {
        return await this.userModel.findAll();
    }

    async getUserById(userId: Identifier): Promise<User>
    {
        return this.findUserByIdOrThrow(userId);
    }

    private async findUserByIdOrThrow(userId: Identifier): Promise<User>
    {
        let user = await this.userModel.findByPk(userId);

        if (!user)
        {
            throw new Error('User not found');
        }

        return user;
    }
}