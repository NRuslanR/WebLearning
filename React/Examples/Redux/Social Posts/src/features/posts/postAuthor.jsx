/*
const React = require('react'),
      { useSelector } = require('react-redux');
*/
import React from 'react';
import { useSelector } from 'react-redux';

//module.exports = ({ authorId }) => 
export default function PostAuthor({ authorId })
    {
        const users = useSelector(state => state.users),
            author = users.find(user => user.id === authorId);

        return <span>{ author ? author.name : 'Unknown author' }</span>

    };