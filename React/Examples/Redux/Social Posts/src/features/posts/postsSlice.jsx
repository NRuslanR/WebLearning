const { createSlice, nanoid } = require('@reduxjs/toolkit'),
      { sub } = require('date-fns'),
      initialReactions = { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
      reactionsList = [
          { ...initialReactions },
          { ...initialReactions }
      ],

        postsSlice = 
            createSlice(
                {
                    name: 'posts',
                    initialState: [
                        {
                            id: 1,
                            date: sub(new Date(), { minutes: 10 }).toISOString(),
                            title: 'First Post',
                            content: 'Hello !',
                            reactions: reactionsList[0]
                        },
                        {
                            id: 2,
                            date: sub(new Date(), { minutes: 5 }).toISOString(),
                            title: 'Second Post',
                            content: 'World',
                            reactions: reactionsList[1]
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
                                        date: new Date().toISOString(),
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

                        },

                        reactionAdded(posts, action)
                        {
                            const 
                                { postId, reaction } = action.payload,
                                post = posts.find(post => post.id == postId);

                            if (post) ++post.reactions[reaction];                     
                        }

                    }
                }
            );

const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

module.exports = {

    postsReducer: postsSlice.reducer,
    postAdded,
    postUpdated,
    reactionAdded

};