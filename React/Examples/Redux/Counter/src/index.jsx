const React = require('react'),
      ReactDOM = require('react-dom'),
      App = require('./app/app.jsx'),
      Store = require('./app/store.js'),
      { Provider } = require('react-redux');

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
      