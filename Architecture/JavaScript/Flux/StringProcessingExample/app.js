const actionCreator = require('./Actions/Creators/stringProcessingActionCreator.js').actionCreator;
const StringProcessingConfigurator = require('./Configuration/configurator.js');

$(() => {

    new StringProcessingConfigurator().configure();

    $('.string-processor-activator').first().onClick((e) => {

        actionCreator.createStringProcessingAction(
            $('.string-processor-input').first().val()
        )

    });

});