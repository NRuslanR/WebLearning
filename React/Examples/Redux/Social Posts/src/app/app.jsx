/*
const React = require('react'),
      {
          BrowserRouter,
          Switch,
          Route,
          Redirect
      } = require('react-router-dom'),
      PostList = require('../features/posts/postList.jsx'),
      AddPostForm = require('../features/posts/addPostForm.jsx'),
      SinglePostPage = require('../features/posts/singlePostPage.jsx'),
      Navbar = require('./navbar.jsx'),
      EditPostPage = require('../features/posts/EditPostPage.jsx');
*/

import React from 'react';
import {
          BrowserRouter,
          Switch,
          Route,
          Redirect
      } from 'react-router-dom';
import PostList from '../features/posts/postList.jsx';
import AddPostForm from'../features/posts/addPostForm.jsx';
import SinglePostPage from'../features/posts/singlePostPage.jsx';
import Navbar from './navbar.jsx';
import EditPostPage from '../features/posts/EditPostPage.jsx';
import UserList from '../features/users/userList.jsx';
import UserPage from '../features/users/userPage.jsx';
import NotificationList from '../features/notifications/notificationList.jsx';

//module.exports =
export default
      function App()
      {
          return (
  
            <BrowserRouter>
                <Navbar />
                <div className="App">
                    <Switch>
                        <Route 
                            exact
                            path = "/"
                            render={() => (
                                <React.Fragment>
                                    <AddPostForm />
                                    <PostList />
                                </React.Fragment>
                            )}
                        />
                        <Route exact path="/posts/:postId" component={SinglePostPage} />
                        <Route exact path="/editPost/:postId" component={EditPostPage} />
                        <Route exact path="/users" component={UserList} />
                        <Route exact path="/users/:userId" component={UserPage} />
                        <Route exact path='/notifications' component={NotificationList} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </BrowserRouter>

          );
      }