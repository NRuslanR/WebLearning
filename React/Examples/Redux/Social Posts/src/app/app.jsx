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

module.exports =
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
                        <Redirect to="/" />
                    </Switch>
                </div>
            </BrowserRouter>

          );
      }