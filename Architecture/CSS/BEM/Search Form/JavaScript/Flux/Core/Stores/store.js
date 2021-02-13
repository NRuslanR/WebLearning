class Store
{
    constructor (dispatcher)
    {
        dispatcher.register(reduce);
    }

    reduce(action)
    {
        throw "Store's reduce not implemented";
    }
}