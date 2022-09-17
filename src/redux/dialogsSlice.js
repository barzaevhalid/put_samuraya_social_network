import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    dialogs: [
        {
            id: 1,
            message: 'Hi'
        },
        {
            id: 2,
            message: 'How is your it-kamasutra?'
        },
        {
            id: 3,
            message: 'You'
        },
        {
            id: 4,
            message: 'Yo'
        }, {
            id: 5,
            message: 'Y'
        },
        {
            id: 6,
            message: 'Hello World!'
        },
    ],
    dialogsItem: [
        {
            id: 1,
            name: 'Халид'
        },
        {
            id: 2,
            name: 'Ибрям'
        },
        {
            id: 3,
            name: 'Абдул'
        },
        {
            id: 4,
            name: 'Адам'
        }, {
            id: 5,
            name: 'Мансур'
        },
        {
            id: 6,
            name: 'Билал'
        },
    ],
}
export const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState,
    reducers: {
        dialogAdd: (state, action) => {
            console.log(action.payload)
            state.dialogs.push({message: action.payload})
        }
    }
})

export const {dialogAdd} = dialogsSlice.actions
export default dialogsSlice.reducer
