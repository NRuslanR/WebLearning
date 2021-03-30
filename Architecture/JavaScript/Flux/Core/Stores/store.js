class Store
{
    constructor (dispatcher)
    {
        dispatcher.register(this.reduce);
    }

    reduce(action)
    {
        throw "Store's reduce not implemented";
    }
}

module.exports = Store;