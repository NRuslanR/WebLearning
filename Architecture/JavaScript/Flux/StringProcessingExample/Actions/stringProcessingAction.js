const Action = require('../../Core/Actions/action.js');

class StringProcessingAction extends Action
{
    constructor(data)
    {
        super('STRING_PROCESSING', data);
    }
}

module.exports = StringProcessingAction;