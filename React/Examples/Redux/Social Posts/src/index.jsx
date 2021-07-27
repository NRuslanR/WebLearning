/*
const React = require('react'),
      ReactDOM = require('react-dom'),
      App = require('./app/app.jsx'),
      { Provider } = require('react-redux'),
      PostStore = require('./app/store.js'),
      Server = require('../api/server.js');
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app.jsx';
import { Provider } from 'react-redux';
import PostStore from './app/store.js';
import Server from '../api/server.js';
import { fetchUsers } from './features/users/usersSlice.jsx';

Server();

PostStore.dispatch(fetchUsers());

ReactDOM.render(
    <Provider store={PostStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);