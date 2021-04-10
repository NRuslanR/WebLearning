const { configureStore } = require('@reduxjs/toolkit'),
      { counterReducer } = require('../features/counter/counterSlice.js');

module.exports = 
    configureStore({
        reducer: {
            counter: counterReducer
        }
    });