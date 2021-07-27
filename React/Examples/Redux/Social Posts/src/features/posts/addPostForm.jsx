/*
const React = require('react'),
      useState = React.useState,
      { useDispatch, useSelector } = require('react-redux'),
      { postAdded } = require('./postsSlice.jsx');
*/
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { addNewPost } from './postsSlice.jsx';

//module.exports =
export
    default function AddPostForm()
    {
        const [title, setTitle] = useState('');
        const [content, setContent] = useState('');
        const [userId, setUserId] = useState('');
        const [addNewPostStatus, setAddNewPostStatus] = useState('idle');
        
        const dispatch = useDispatch();

        const canSave = 
            [title, content, userId].every(Boolean) && addNewPostStatus === 'idle';

        const users = useSelector(state => state.users);

        const onSavePostClicked = () => {

            if (!canSave) return;
            
            setAddNewPostStatus('pending');

            try
            {           
                const result = dispatch(addNewPost({ title, content, userId }));

                unwrapResult(result);

                setTitle('');
                setContent('');
                setUserId('')
            }

            catch(err)
            {
                console.error(`Failed to add new post: `, err);
            }

            finally
            {
                setAddNewPostStatus('idle')
            }
        };

        return (
          
            <section>
                <h2>Add New Post</h2>
                <form>
                    <div>
                        <label htmlFor="postAuthor">Author:</label>
                        <select 
                            id="postAuthor" 
                            value={userId} 
                            onChange={e => setUserId(e.target.value)}
                        >
                            <option value=""></option>
                            {
                                users.map(user => {
                                    return (
                                        <option key={user.id} value={user.id}>
                                            {user.name}
                                        </option>
                                    );
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <label>Post Title:</label>
                        <br/>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Content:</label>
                        <br/>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>
                    <button 
                        type="button"
                        onClick={onSavePostClicked}
                        disabled={!canSave}
                    >
                        Save Post
                    </button>
                </form>
            </section>
            
        );
    }