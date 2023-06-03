import { createSlice } from "@reduxjs/toolkit";


let initialState = {
    data: []
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        getdata: (state, action) => {
            state.data = action.payload
        }
    }
});


export const { getdata } = dataSlice.actions