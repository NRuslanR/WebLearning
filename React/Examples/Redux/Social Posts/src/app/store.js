/*
const { configureStore } = require('@reduxjs/toolkit'),
      { postsReducer } = require('../features/posts/postsSlice.jsx'),
      { usersReducer } = require('../features/users/usersSlice.jsx');
*/
import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from '../features/posts/postsSlice.jsx';
import { usersReducer } from '../features/users/usersSlice.jsx';
import { notificationsReducer } from '../features/notifications/notificationsSlice.jsx';

//module.exports = 
const PostStore =
    configureStore({
        reducer: {
            posts: postsReducer,
            users: usersReducer,
            notifications: notificationsReducer
        }
    });

export default PostStore;