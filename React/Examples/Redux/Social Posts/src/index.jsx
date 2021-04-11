const React = require('react'),
      ReactDOM = require('react-dom'),
      App = require('./app/app.jsx'),
      { Provider } = require('react-redux'),
      PostStore = require('./app/store.js');

ReactDOM.render(
    <Provider store={PostStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);