import { Sequelize, DataTypes, Model } from "sequelize";
import { User } from '../../../users/store/models/index.js';

export class Comment extends Model {};
export class Post extends Model {};

export const defineCommentModel = (sequelize) => {

    Comment.init({
        text: DataTypes.STRING,
        writtenAt: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'comment',
        tableName: 'comments',
        timestamps: false
    });

    Comment.associate = () => {

        User.hasMany(Comment, {
            as: 'commentAuthor',
            foreignKey: {
                name: 'authorId'
            }
        });

        Comment.belongsTo(User, {
            as: 'commentAuthor',
            foreignKey: 'authorId'
        });
    }

    return Comment;
};

export const definePostModel = (sequelize) => {

    Post.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: DataTypes.STRING,
        content: DataTypes.STRING,
        createdAt: DataTypes.DATE,
    }, {
        sequelize,
        modelName: 'post',
        tableName: 'posts',
        timestamps: false
    });

    Post.associate = () => {

        Post.hasMany(Comment);
        Comment.belongsTo(Post);

        User.hasMany(Post, {
            as: 'postAuthor',
            foreignKey: 'authorId'
        });

        Post.belongsTo(User, {
            as: 'postAuthor',
            foreignKey: 'authorId'
        });
    };   

    return Post;
};

