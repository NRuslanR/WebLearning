const React = require('react'),
      {
          BrowserRouter,
          Switch,
          Route,
          Redirect
      } = require('react-router-dom'),
      PostList = require('../features/posts/postList.jsx'),
      AddPostForm = require('../features/posts/addPostForm.jsx');
const addPostForm = require('../features/posts/addPostForm.jsx');

module.exports =
      function App()
      {
          return (
  
            <BrowserRouter>
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
                        <Redirect to="/" />
                    </Switch>
                </div>
            </BrowserRouter>

          );
      }