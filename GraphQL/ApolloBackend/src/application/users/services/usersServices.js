"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const models_1 = require("../store/models");
const init_1 = require("../../shared/store/init");
const graphql_modules_1 = require("graphql-modules");
let UsersService = class UsersService {
    connection;
    userModel;
    selectOptions;
    constructor() {
        this.connection = init_1.DataStore.getCurrent().getConnection();
        this.userModel = init_1.DataStore.getCurrent().getModels().User;
        this.selectOptions = {
            include: [
                {
                    model: models_1.UserAddress,
                    as: 'address'
                }
            ]
        };
    }
    async getAllUsers() {
        return await this.userModel.findAll(this.selectOptions);
    }
    async getUserById(userId) {
        return this.findUserByIdOrThrow(userId);
    }
    async findUserByIdOrThrow(userId) {
        let user = await this.userModel.findByPk(userId, this.selectOptions);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }
};
UsersService = __decorate([
    (0, graphql_modules_1.Injectable)({
        scope: graphql_modules_1.Scope.Singleton,
        global: true
    }),
    __metadata("design:paramtypes", [])
], UsersService);
exports.UsersService = UsersService;
