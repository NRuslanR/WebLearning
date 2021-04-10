const { createSlice } = require('@reduxjs/toolkit'),
        counterSlice = 
            createSlice({
                name: "counter",
                initialState: {
                    value: 0
                },
                reducers: {
                    increment: state => {

                        state.value += 1;
                    },
                    decrement: state => {

                        state.value -= 1;
                    },
                    incrementByAmount: (state, action) => {

                        state.value += action.payload;
                    }
                }
            }),
      { increment, decrement, incrementByAmount } = counterSlice.actions;

module.exports = {
    
    increment: increment,
    decrement: decrement,
    incrementByAmount: incrementByAmount,
    incrementByAmountAsync: amount => (dispatch, getState) => {

        setTimeout(
            () => {
                dispatch(incrementByAmount(amount))
            },
            3000
        )
    },
    selectCount: state => state.counter.value,
    counterReducer: counterSlice.reducer
}