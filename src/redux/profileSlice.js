import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    posts: [
        {id: 1, message: "hello1", likesCount: 1,},
        {id: 2, message: "hello2", likesCount: 2,},
        {id: 3, message: "hello3", likesCount: 3,},
        {id: 4, message: "hello4", likesCount: 4,},
    ],
    newPostText: '',
}
export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push(
                {id: state.posts.length, message: action.payload, likesCount: state.posts.length})
        }
    }
})
export const {addPost} = profileSlice.actions;
export default  profileSlice.reducer;
