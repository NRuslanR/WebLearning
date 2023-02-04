"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const init_1 = require("../../shared/store/init");
const graphql_modules_1 = require("graphql-modules");
let UsersService = class UsersService {
    connection;
    userModel;
    constructor() {
        this.connection = init_1.DataStore.getCurrent().getConnection();
        this.userModel = init_1.DataStore.getCurrent().getModels().User;
    }
    async getAllUsers() {
        return await this.userModel.findAll();
    }
    async getUserById(userId) {
        return this.findUserByIdOrThrow(userId);
    }
    async findUserByIdOrThrow(userId) {
        let user = await this.userModel.findByPk(userId);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }
};
UsersService = __decorate([
    (0, graphql_modules_1.Injectable)({
        scope: graphql_modules_1.Scope.Singleton
    })
], UsersService);
exports.UsersService = UsersService;
