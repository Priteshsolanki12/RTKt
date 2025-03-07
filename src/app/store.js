import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from '../features/TodoSlice'

const store = configureStore({
    reducer:{
        Todo : TodoReducer
    }
})

export default store;