const Store = require('../../Core/Stores/store.js');

class LoggingStore extends Store
{
    reduce(action)
    {
        console.log(`New Action Raised: ${JSON.stringify(action)}`);
    }
}

module.export = LoggingStore;