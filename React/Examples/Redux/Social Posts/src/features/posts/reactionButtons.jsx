/*
const
    React = require('react'),
    { useDispatch } = require('react-redux'),
    { reactionAdded } = require('./postsSlice.jsx');
*/
import React from 'react';
import { useDispatch } from 'react-redux';
import { reactionAdded } from './postsSlice.jsx';

//module.exports = ({ post }) => 
export default function ReactionButtons({ post })
    {

        let 
            dispatch = useDispatch();

        return (

            <div>
                {
                    Object
                    .entries(post.reactions.icons)
                    .map(([name, icon]) => {
                        
                        return (
                            <button 
                                key={name} 
                                type="button"
                                onClick={
                                    () => dispatch(
                                        reactionAdded(
                                            {
                                                postId: post.id,
                                                reaction: name
                                            }
                                        )
                                    )
                                }
                            >
                                {icon} {post.reactions[name]}
                            </button>
                        ); 
                    })
                }
            </div>
        );
    };
