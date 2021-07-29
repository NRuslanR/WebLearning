/*
const React = require('react'),
      { useSelector } = require('react-redux'),
      { Link } = require('react-router-dom'),
        PostAuthor = require('./postAuthor.jsx'),
        TimeAgo = require('./timeAgo.jsx'),
        ReactionButtons = require('./reactionButtons.jsx'),
      { selectPostById } = require('./postsSlice.jsx');
*/
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PostAuthor from './postAuthor.jsx';
import TimeAgo from './timeAgo.jsx';
import ReactionButtons from './reactionButtons.jsx';
import { selectPostById } from './postsSlice.jsx';

//module.exports = ({ match }) => 
export default function SinglePostPage({ match })
    {

        const { postId } = match.params,
                post = useSelector(state => selectPostById(state, postId));

        if (!post)
        {
            return (
                <section>
                    <h2>Post not found !</h2>
                </section>
            );
        }

        return (
            <section>
                <article>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    Author: <PostAuthor authorId={post.userId} />
                    <TimeAgo timestamp={post.date} />
                    <br/>
                    <ReactionButtons post={post} />
                    <Link to={`/editPost/${post.id}`}>Edit</Link>
                </article>
            </section>
        );
    };
