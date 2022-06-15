import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: []
};

const addBookSlice = createSlice({
    name: 'bookAction',
    initialState,
    reducers: {
        updateBooks(state, action){
            if (action.payload.length > 0){
                state.books = action.payload;
            }
        }
    },
});


export const {addBook, removeBook, updateBooks} = addBookSlice.actions;

export default addBookSlice.reducer;