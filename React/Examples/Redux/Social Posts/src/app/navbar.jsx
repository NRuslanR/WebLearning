const React = require('react'),
      { Link } = require('react-router-dom');

module.exports = function () {

    return (
        <nav>
            <h1>Redux Essentials Example</h1>
            <Link to="/">Posts</Link>
        </nav>
    );
};