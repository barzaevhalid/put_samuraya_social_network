import {configureStore} from '@reduxjs/toolkit'
import dialogsSlice from './dialogsSlice'
import profileSlice from './profileSlice'
import sidebarReducer from "./sidebarReducer";
import usersSlice from "./usersSlice";
const store = configureStore({
    reducer: {
        dialogsSlice,
        profileSlice,
        sidebarReducer,
        usersSlice,
    }
})
export default  store;
