/*
const React = require('react'),
      useState = React.useState,
      { useDispatch, useSelector} = require('react-redux'),
      { useHistory } = require('react-router-dom'),
      { postUpdated, selectPostById } = require('./postsSlice.jsx');
*/
import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postUpdated, selectPostById } from './postsSlice.jsx';
//module.exports = ({ match }) => 
export default function EditPostPage({ match })
    {

        const { postId } = match.params,
                post = useSelector(selectPostById);

        if (!post)
        {
            return <h2>Post not found</h2>
        }

        const [ title, setTitle ] = useState(post.title),
            [ content, setContent] = useState(post.content);

        const dispatch = useDispatch(),
            history = useHistory();

        const onPostTitleChanged = e => setTitle(e.target.value),
            onPostContentChanged = e => setContent(e.target.value),
            onSavePostClicked = () => {

                if (title && content)
                {
                    dispatch(postUpdated({ id: post.id, title, content}));
                    history.push(`/posts/${postId}`);
                }

            };

        return (
            <div>
                <div>
                    <label>Title:</label>
                    <br/>
                    <input
                        type="text"
                        onChange={onPostTitleChanged}
                        value={title}
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <br/>
                    <textarea
                        value={content}
                        onChange={onPostContentChanged}
                    >
                    </textarea>
                </div>
                <button onClick={onSavePostClicked}>Save</button>
            </div>
        );

    }
        