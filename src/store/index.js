import { configureStore } from "@reduxjs/toolkit";
import addBookReducer from './addBookSlice';

export default configureStore({
    reducer: {
        bookAction: addBookReducer,
    }
});