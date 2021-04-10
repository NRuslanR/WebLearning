const React = require('react'),
      Counter = require('../features/counter/counter.jsx');

class App extends React.Component
{
    render()
    {
        return <Counter />
    }
}

module.exports = App;