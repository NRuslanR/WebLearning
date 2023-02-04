"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataStore = void 0;
const sequelize_1 = require("sequelize");
const index_js_1 = __importDefault(require("./models/index.js"));
const cls_hooked_1 = require("cls-hooked");
class DataStore {
    static instance;
    connection;
    models;
    static of(db, user, password, opts) {
        return new DataStore(db, user, password, opts);
    }
    static asCurrent(db, user, password, opts) {
        this.setCurrent(DataStore.of(db, user, password, opts));
        return this.getCurrent();
    }
    constructor(db, user, password, opts) {
        opts = {
            host: opts?.host ?? 'localhost',
            port: opts?.port ?? 5432,
            dialect: opts?.dialect ?? 'postgres',
            transactionality: opts?.transactionality ?? true
        };
        this.setTransactionality();
        this.connection = new sequelize_1.Sequelize(db, user, password, opts);
    }
    setTransactionality = () => {
        const transactionNamespace = (0, cls_hooked_1.createNamespace)('default');
        sequelize_1.Sequelize.useCLS(transactionNamespace);
    };
    connect = async (opts) => {
        try {
            await this.connection.authenticate();
            if (opts?.syncModels === true)
                this.syncModels();
        }
        catch (error) {
            console.log(`connect to graphql data store error: ${error}`);
        }
    };
    syncModels = async () => {
        this.models = (0, index_js_1.default)(this.connection);
        this.connection.sync({ alter: true });
    };
    getConnection = () => this.connection;
    getModels = () => {
        return this.models;
    };
    close = async () => {
        this.connection.close();
    };
    static getCurrent() {
        return this.instance;
    }
    static setCurrent(instance) {
        this.instance = instance;
    }
}
exports.DataStore = DataStore;
;
