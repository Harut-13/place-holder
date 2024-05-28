import { configureStore } from "@reduxjs/toolkit";
import  postSlice  from "./slices/postsSlice";
import commentsSlice from "./slices/commentsSlice";

 const store=configureStore({
    reducer:{
        postData: postSlice,
        commentsData :commentsSlice
    }, 
})


export default store