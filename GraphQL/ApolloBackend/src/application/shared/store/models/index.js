import { definePostModel, defineCommentModel } from "../../../posts/store/models/index.js";
import defineUserModel from "../../../users/store/models/index.js";

const
    defineDataModels = (sequelize) => {

        const models = {
            Post: definePostModel(sequelize),
            Comment: defineCommentModel(sequelize),
            User: defineUserModel(sequelize)
        };

        for(let model in models)
            models[model].associate?.call(models[model]);

        return models;
    };

export default defineDataModels;