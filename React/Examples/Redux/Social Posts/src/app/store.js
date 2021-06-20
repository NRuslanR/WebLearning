const { configureStore } = require('@reduxjs/toolkit'),
      { postsReducer } = require('../features/posts/postsSlice.jsx'),
      { usersReducer } = require('../features/users/usersSlice.jsx');

module.exports = 
    configureStore({
        reducer: {
            posts: postsReducer,
            users: usersReducer
        }
    });