import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: 'counter',

    initialState: {
        count: 0,
        gap: 1
    },

    reducers: {
        increment: (state) => {
            state.count += 1
        },

        decrement: (state) => {
            state.count -= 1
        },

        adjustGap: (state, action) => {
            console.log('adjustGapp action: ', action.payload)
            state.gap = action.payload
        }
    }
})

export const  { increment, decrement, adjustGap } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;