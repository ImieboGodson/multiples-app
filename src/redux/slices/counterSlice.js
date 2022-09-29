import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: 'counter',

    initialState: {
        value: 0,
        gap: 1
    },

    reducers: {
        increment: (state) => {
            state.value += 1
        },

        decrement: (state) => {
            state.value -= 1
        },

        adjustGap: (state, action) => {
            state.gap += action.payload
        }
    }
})

export const  { increment, decrement, adjustGap } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;