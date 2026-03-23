import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./PostsSlice"
import usersReducer from './UserSlice'

const Store=configureStore({
    reducer:{
        posts:postsReducer,
        users:usersReducer,
        
    }
})
export default Store;
