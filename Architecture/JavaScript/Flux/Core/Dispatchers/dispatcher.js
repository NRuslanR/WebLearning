class Dispatcher 
{
    constructor()
    {
        this.tokenSource = 0;
        this.callbacks = new Map();
        this.calledCallbacks = new Set();
        this.processeableAction = null;
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
        this.processeableAction = action;
        
        try
        {
            this.callbacks.forEach(
                (val, key, map) => {
                    
                    this.calledCallbacks.add(key);

                    val(action);
                    
                    this.calledCallbacks.delete(key);
                }
            );
        }

        finally
        {
            this.processeableAction = null;
        }
    }

    waitFor(tokens)
    {
        tokens ? waitForCallbacks(tokens) : waitForNotCalledCallbacks();
    }

    #waitForCallbacks(tokens)
    {
        tokens.forEach((val, key) => {

            if (this.calledCallbacks.has(key))
                throw `Callback with token ${key} is already "waitFor" called as well`;

            var callback = this.callbacks.get(key);

            if (!callback)
                throw `Callback with token ${key} not found`;

            callback(this.processeableAction);
        });
    }

    #waitForNotCalledCallbacks()
    {
        this.callbacks.forEach(
            (callback, token, map) => {

                if (!this.calledCallbacks.has(token))
                    callback(this.processeableAction);
            }
        );
    }
}

module.export = Dispatcher;