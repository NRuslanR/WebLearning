const ActionCreator = require( '../../../Core/Actions/Creators/actionCreator.js');
const StringProcessingAction = require('../stringProcessingAction.js');

class StringProcessingActionCreator extends ActionCreator
{
    createStringProcessingAction(string)
    {
        this._emitAction(
            new StringProcessingAction({
                
                string: string

            })
        );
    }
}

var actionCreator = null;

module.exports = { StringProcessingActionCreator, actionCreator }