import { Sequelize, DataTypes, Model } from 'sequelize'

export class UserAddress extends Model {};
export class User extends Model {};

const 
    defineUserAddressModel = (sequelize) => {

        UserAddress.init({
            city: DataTypes.STRING,
            street: DataTypes.STRING,
            room: DataTypes.STRING
        }, {
            sequelize,
            modelName: 'address',
            tableName: 'addresses',
            timestamps: false
        });

        return UserAddress;

    },
    defineUserModel = (sequelize) => {

        User.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            birthDate: DataTypes.DATE,
            registeredAt: {
                type: DataTypes.DATE
            }
        }, {

            sequelize,
            modelName: 'user',
            tableName: 'users',
            timestamps: false
        });
        
        let UserAddress = defineUserAddressModel(sequelize);

        User.associate = () => {

            User.hasOne(UserAddress);
            UserAddress.belongsTo(User);

        };
        
        return User; 
    };

export default defineUserModel;
