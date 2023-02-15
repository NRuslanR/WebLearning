import { Identifier, Sequelize } from "sequelize";
import { User, UserAddress } from "../store/models";
import { DataStore } from '../../shared/store/init';
import { Injectable, Scope } from "graphql-modules";

@Injectable({
    scope: Scope.Singleton
    , global: true
})
export class UsersService
{
    private connection: Sequelize;
    private userModel: any;
    private selectOptions: any;

    constructor()
    {
        this.connection = DataStore.getCurrent().getConnection();
        this.userModel = <User>DataStore.getCurrent().getModels().User;

        this.selectOptions = {
            include: [
                {
                    model: UserAddress,
                    as: 'address'
                }
            ]
        };
    }

    async getAllUsers(): Promise<User[]>
    {
        return await this.userModel.findAll(this.selectOptions);
    }

    async getUserById(userId: Identifier): Promise<User>
    {
        return this.findUserByIdOrThrow(userId);
    }

    private async findUserByIdOrThrow(userId: Identifier): Promise<User>
    {
        let user = await this.userModel.findByPk(userId, this.selectOptions);

        if (!user)
        {
            throw new Error('User not found');
        }

        return user;
    }
}