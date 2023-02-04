import { Sequelize } from "sequelize";
import defineDataModels from './models/index.js';
import { createNamespace } from 'cls-hooked';

export class DataStore 
{
    private static instance: DataStore;
    private connection: Sequelize;
    private models: any

    static of(db, user, password, opts)
    {
        return new DataStore(db, user, password, opts);
    }

    static asCurrent(db, user, password, opts)
    {
        this.setCurrent(DataStore.of(db, user, password, opts));

        return this.getCurrent();
    }
    
    private constructor(db, user, password, opts)
    { 
        opts =  { 
            host:  opts?.host ?? 'localhost', 
            port: opts?.port ?? 5432, 
            dialect: opts?.dialect ?? 'postgres', 
            transactionality: opts?.transactionality ?? true 
        };

        this.setTransactionality();
        
        this.connection = new Sequelize(db, user, password, opts);
    }

    private setTransactionality = () => {

        const transactionNamespace = createNamespace('default');

        Sequelize.useCLS(transactionNamespace);
    }
    
    connect = async (opts) => {

        try
        {
            await this.connection.authenticate(); 

            if (opts?.syncModels === true)
                this.syncModels();
        }

        catch (error) {
            console.log(`connect to graphql data store error: ${error}`);
        }
    };

    syncModels = async () => {

        this.models = defineDataModels(this.connection);

        this.connection.sync({ alter: true })
    }

    getConnection = () => this.connection;
    
    getModels = () => {

        return this.models;
    }

    close = async () => {

        this.connection.close();
    }

    static getCurrent() {
        return this.instance;
    }

    private static setCurrent(instance: DataStore)
    {
        this.instance = instance;
    }
};
