//const { createSlice } = require('@reduxjs/toolkit');

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../../../api/client.js';

export
const
    fetchUsers = createAsyncThunk('users/getAllUsers', async () => {

        return (await client.getUsers()).users;

    });

const
    usersSlice =
        createSlice(
            {
                name: 'users',

                initialState: [

                ],

                reducers: {

                },

                extraReducers: {

                    [fetchUsers.fulfilled]: (state, action) => {

                        return action.payload;

                    }
                }
            }
        );

const usersReducer = usersSlice.reducer;


//module.exports = 
export
{

    usersReducer
    
}
