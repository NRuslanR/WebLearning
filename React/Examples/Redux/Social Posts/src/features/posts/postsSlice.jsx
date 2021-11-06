/*
const 
    { createSlice, nanoid, createAsyncThunk } = require('@reduxjs/toolkit'),
    { sub } = require('date-fns'),
    client = require('../../../api/client.js');
*/
import { 
    createSlice, 
    nanoid, 
    createAsyncThunk, 
    createSelector,
    createEntityAdapter
} 
from '@reduxjs/toolkit';
import { sub } from 'date-fns';
import client from '../../../api/client.js';

const
    initialReactions = { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
    reactionsList = [
        { ...initialReactions },
        { ...initialReactions }
    ];

const
    postsAdapter =
        createEntityAdapter({
            sortComparer: (a, b) => b.date.localCompare(a.date)
        }),
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
    initialState =
        postsAdapter.getInitialState({
            state: 'idle',
            error: null
        });

const
    postsSlice = 
        createSlice(
            {
                name: 'posts',
                initialState,
                reducers: {
                    /*postAdded: {

                        reducer(posts, action)
                        {
             
                        },

                        prepare(title, content, userId)
                        {
                          
                        }
                    },*/

                    postUpdated: (posts, action) => {

                        const { id, title, content } = action.payload;

                        var postToUpdate = posts.entities[id];

                        if (!postToUpdate) return;
                
                        postToUpdate.title = title;
                        postToUpdate.content = content;

                    },

                    reactionAdded(posts, action)
                    {
                        const 
                            { postId, reaction } = action.payload,
                            post = posts.entities[postId];

                        if (post) 
                            ++post.reactions[reaction];                     
                    }

                },

                extraReducers(builder) {
                    /*
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

                    }*/
                    builder
                        .addCase(fetchPosts.pending, (posts, action) => {

                            posts.state = 'loading';
                        })
                        .addCase(fetchPosts.fulfilled, (posts, action) => {

                            posts.state = 'succeeded';

                            postsAdapter.upsertMany(posts, action.payload);
                        })
                        .addCase(fetchPosts.rejected, (posts, action) => {

                            posts.state = 'failed';

                            posts.error = action.error.message;
                        })
                        .addCase(addNewPost.fulfilled, postsAdapter.addOne);
                }
            }
        );

const { postUpdated, reactionAdded } = postsSlice.actions;

const {

    selectAll: selectAllPosts,
    selectById: selectPostById,
    selectIds: selectPostIds

} = postsAdapter.getSelectors(state => state.posts);

const 
    /*selectAllPosts = state => state.posts.items,
    selectPostById = (state, postId) => state.posts.items.find(p => p.id == postId),*/
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
        postUpdated,
        reactionAdded,
        selectAllPosts,
        selectPostById,
        selectPostIds,
        fetchPosts,
        addNewPost,
        selectPostsByUser

    };
