import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: 'counter',

    initialState: {
        count: 0,
        gap: 1,
        length: 10,
    },

    reducers: {
        increment: (state) => {
            state.count += 1
        },

        decrement: (state) => {
            state.count -= 1
        },

        applyFilter: (state, action) => {
            console.log('applyFilter action: ', action.payload);
            state.gap = action.payload.gapInput
            state.length = action.payload.lengthInput
        }
    }
})

export const  { increment, decrement, applyFilter } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;