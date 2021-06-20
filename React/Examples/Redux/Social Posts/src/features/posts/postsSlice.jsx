const { createSlice, nanoid } = require('@reduxjs/toolkit'),

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
                        postAdded: {

                            reducer(posts, action)
                            {
                                posts.push(action.payload);
                            },

                            prepare(title, content, userId)
                            {
                                return {
                                    
                                    payload: {
                                        id: nanoid(),
                                        title,
                                        content,
                                        userId
                                    }
                                }
                            }
                        },

                        postUpdated: (posts, action) => {

                            const dataToUpdate = action.payload;

                            var postToUpdate = posts.find(p => p.id === dataToUpdate.id);

                            if (!postToUpdate) return;
                    
                            postToUpdate.title = dataToUpdate.title;
                            postToUpdate.content = dataToUpdate.content;

                        }
                    }
                }
            );

const { postAdded, postUpdated } = postsSlice.actions;

module.exports = {

    postsReducer: postsSlice.reducer,
    postAdded,
    postUpdated

};