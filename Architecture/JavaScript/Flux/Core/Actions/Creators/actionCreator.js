class ActionCreator
{
    constructor (dispatcher)
    {
        this.dispatcher = dispatcher;
    }

    _emitAction(action)
    {
        this.dispatcher.dispatch(action);
    }
}

module.exports = ActionCreator;