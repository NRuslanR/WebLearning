/*
const React = require('react'),
      { useEffect } = React,
      { useSelector, useDispatch } = require('react-redux'),
      { Link } = require('react-router-dom'),
      PostAuthor = require('./postAuthor.jsx'),
      TimeAgo = require('./timeAgo.jsx'),
      ReactionButtons = require('./reactionButtons.jsx'),
      { selectAllPosts, fetchPosts } = require('./postsSlice.jsx');
*/
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PostAuthor from './postAuthor.jsx';
import TimeAgo from './timeAgo.jsx';
import ReactionButtons from './reactionButtons.jsx';
import { selectAllPosts, fetchPosts } from './postsSlice.jsx';

//module.exports = 
export
    default function PostList()
    {
        const 
            dispatch = useDispatch(),
            posts = useSelector(selectAllPosts),
            postsStatus = useSelector(state => state.posts.state),
            error = useSelector(state => state.posts.error);
            
        useEffect(
            () => {
                if (postsStatus == 'idle')
                    dispatch(fetchPosts());
            },
            [postsStatus, dispatch]
        );
        
        let content;

        if (postsStatus == 'loading')
        {
            content = <div>Loading...</div>
        }

        else if (postsStatus == 'failed')
        {
            content = <div>{error}</div>
        }

        else if (postsStatus == 'succeeded')
        {
            const
                orderedPosts =
                    posts.slice().sort((a, b) => b.date.localeCompare(a.date)),

                renderedPosts = 
                    orderedPosts.map(post => {

                        return <article className="post-excerpt" key={post.id}>
                            <h3>{post.title}</h3>
                            <p className="post-content">{post.content}</p>
                            Author: <PostAuthor authorId={post.userId} /> 
                            <TimeAgo timestamp={post.date} />
                            <br/>
                            <ReactionButtons post={post} />
                            <br/>
                            <Link to={`/posts/${post.id}`}>View Post</Link>
                        </article>
                    });

            content = renderedPosts;
        }

        else
        {
            content = <div>Unknown</div>
        }

        return  <section className="post-list">
                    <h2>Posts</h2>
                    {content}
                </section>
    };