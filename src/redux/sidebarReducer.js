import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: ''
}

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {

    }
})

export default  sidebarSlice.reducer;
