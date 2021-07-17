const 
    { createSlice, nanoid } = require('@reduxjs/toolkit'),
    { sub } = require('date-fns'),
    initialReactions = { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
    reactionsList = [
        { ...initialReactions },
        { ...initialReactions }
    ],

const 
    initialState = {

        items: [],
        state: 'idle',
        error: null
    };

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
                            posts.items.push(action.payload);
                        },

                        prepare(title, content, userId)
                        {
                            throw 'prepare not implemented';
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

                }
            }
        );

const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

const 
    selectAllPosts = state => state.posts.items,
    selectPostById = (state, postId) => state.posts.items.find(p => p.id == postId);

module.exports = {

    postsReducer: postsSlice.reducer,
    postAdded,
    postUpdated,
    reactionAdded,
    selectAllPosts,
    selectPostById

};