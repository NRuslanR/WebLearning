import { actionCreator } from './Actions/Creators/stringProcessingActionCreator.js';
const StringProcessingConfigurator = require('./Configuration/configurator.js');

$(() => {

    new StringProcessingConfigurator().configure();

    $('.string-processor-activator').first().onClick((e) => {

        actionCreator.createStringProcessingAction(
            $('.string-processor-input').first().val()
        )

    });

});