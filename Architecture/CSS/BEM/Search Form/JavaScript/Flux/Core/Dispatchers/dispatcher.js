class Dispatcher 
{
    constructor()
    {
        this.tokenSource = 0;
        this.callbacks = new Map();
    }

    register(callback)
    {
        ++this.tokenSource;

        this.callbacks.set(this.tokenSource, callback);

        return this.tokenSource;
    }

    unregister(token)
    {
        this.callbacks.delete(token);
    }

    dispatch(action)
    {
        this.callbacks.forEach((val, key, map) => val(action));
    }

}

export { Dispatcher };