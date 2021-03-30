const Dispatcher = require('../../Core/Dispatchers/dispatcher.js');
const StringProcessingStore = require('../Stores/StringProcessingStore.js');
const LoggingStore = require('../Stores/LoggingStore.js');
const StringProcessingSummarizeTableView = require('../Views/stringProcessingSummarizeTableView.js');
const StringProcessingSummarizeListView = require('../Views/stringProcessingSummarizeListView.js');
const { StringProcessingActionCreator, actionCreator } = require('../Actions/Creators/stringProcessingActionCreator.js');

class StringProcessingConfigurator
{
    configure()
    {
        var 
            dispatcher = new Dispatcher(),
            stringProcessingStore = new StringProcessingStore(dispatcher),
            loggingStore = new LoggingStore(dispatcher);

        actionCreator = new StringProcessingActionCreator(dispatcher);
        
        stringProcessingStore.addViews(
            [
                new StringProcessingSummarizeTableView(),
                new StringProcessingSummarizeListView()
            ]
        );

    }
}

module.exports = StringProcessingConfigurator;