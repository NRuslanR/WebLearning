/*
const 
    { createSlice, nanoid, createAsyncThunk } = require('@reduxjs/toolkit'),
    { sub } = require('date-fns'),
    client = require('../../../api/client.js');
*/
import { createSlice, nanoid, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import { sub } from 'date-fns';
import client from '../../../api/client.js';

const
    initialReactions = { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
    reactionsList = [
        { ...initialReactions },
        { ...initialReactions }
    ];

const 
    initialState = {

        items: [],
        state: 'idle',
        error: null
    };

const
    fetchPosts = 
        createAsyncThunk(
            'posts/getAllPosts', 
            async () => (await client.getPosts()).posts
        ),
    addNewPost =
        createAsyncThunk(
            'posts/addNewPost',
            async (post) => await client.addPost(post)
        );

const
    postsSlice = 
        createSlice(
            {
                name: 'posts',
                initialState,
                reducers: {
                    postAdded: {

                        reducer(posts, action)
                        {
             
                        },

                        prepare(title, content, userId)
                        {
                          
                        }
                    },

                    postUpdated: (posts, action) => {

                        const dataToUpdate = action.payload;

                        var postToUpdate = posts.items.find(p => p.id === dataToUpdate.id);

                        if (!postToUpdate) return;
                
                        postToUpdate.title = dataToUpdate.title;
                        postToUpdate.content = dataToUpdate.content;

                    },

                    reactionAdded(posts, action)
                    {
                        const 
                            { postId, reaction } = action.payload,
                            post = posts.items.find(post => post.id == postId);

                        if (post) ++post.reactions[reaction];                     
                    }

                },

                extraReducers: {
                    [fetchPosts.pending]: (posts, action) => {

                        posts.state = 'loading';
                    },

                    [fetchPosts.fulfilled]: (posts, action) => {

                        posts.state = 'succeeded';
                        posts.items = posts.items.concat(action.payload);

                    },

                    [fetchPosts.rejected]: (posts, action) => {

                        posts.state = 'failed';
                        posts.error = action.error.message;
                    },

                    [addNewPost.fulfilled]: (posts, action) => {

                        posts.items.push(action.payload);

                    }
                }
            }
        );

const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

const 
    selectAllPosts = state => state.posts.items,
    selectPostById = (state, postId) => state.posts.items.find(p => p.id == postId),
    selectPostsByUser = createSelector([
        selectAllPosts, (state, userId) => userId
    ],
    (posts, userId) => posts.filter(post => post.userId == userId)
    ),
    postsReducer = postsSlice.reducer;


//module.exports = 
export
    {

        postsReducer,
        postAdded,
        postUpdated,
        reactionAdded,
        selectAllPosts,
        selectPostById,
        fetchPosts,
        addNewPost,
        selectPostsByUser

    };
