const { createSlice } = require('@reduxjs/toolkit'),
        usersSlice =
            createSlice(
                {
                    name: 'users',

                    initialState: [

                        { id: 1, name: 'Dmitry Ruslanov' },
                        { id: 2, name: 'Sergey Viktorov' }
                    ],

                    reducers: {

                    }
                }
            );

module.exports = {

    usersReducer: usersSlice.reducer
    
}