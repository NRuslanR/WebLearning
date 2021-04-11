const { configureStore } = require('@reduxjs/toolkit'),
      { postsReducer } = require('../features/posts/postsSlice.js');

module.exports = 
    configureStore({
        reducer: {
            posts: postsReducer
        }
    });