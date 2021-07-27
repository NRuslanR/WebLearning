/*
const React = require('react'),
      { Link } = require('react-router-dom');
*/
import React from 'react';
import { Link } from 'react-router-dom';

//module.exports = 
export default
    function Navbar () {

        return (
            <nav>
                <h1>Redux Essentials Example</h1>
                <Link to="/">Posts</Link>
            </nav>
        );
    };