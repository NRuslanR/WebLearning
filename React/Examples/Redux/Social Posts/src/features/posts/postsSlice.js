const { createSlice } = require('@reduxjs/toolkit'),
        postsSlice = 
            createSlice(
                {
                    name: 'posts',
                    initialState: [
                        {
                            id: 1,
                            title: 'First Post',
                            content: 'Hello !'
                        },
                        {
                            id: 2,
                            title: 'Second Post',
                            content: 'World'
                        }
                    ],
                    reducers: {
                        postAdded: (posts, action) => {

                            posts.push(action.payload)
                        }
                    }
                }
            );

const { postAdded } = postsSlice.actions;

module.exports = {

    postsReducer: postsSlice.reducer,
    postAdded

};