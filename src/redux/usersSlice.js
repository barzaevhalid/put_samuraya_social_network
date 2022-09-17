import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: [],
    error: null,
    totalsCount: 0,
    currentPage: 1,
    pageSize: 5,
    isFetching: false,
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        follow: (state, action) => {
        const user = state.users.find(item => item.id === action.payload.userId)
            user.followed = true
        },
        unFollow: (state, action) => {
            const user = state.users.find(item => item.id === action.payload.userId)
            user.followed = false
        },
        setUsers: (state, action) => {
            state.users = action.payload.items
            state.error = action.payload.error
            state.totalsCount = action.payload.totalCount
        },
        setPage: (state, action) => {
            state.currentPage = action.payload
        },
        isFetch: (state, action) => {
            state.isFetching = action.payload
        }
    }
})
export const {follow, unFollow, setUsers, setPage, isFetch,} =  usersSlice.actions;
export default  usersSlice.reducer;
