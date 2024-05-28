import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
  'fetchPosts',
  async()=>{
  const result = await axios.get('https://jsonplaceholder.typicode.com/posts')


  return result.data
  },
)


export const postSlice = createSlice({
  name: 'post-slice',
  initialState : {
      post :[],
      isFetching : false
  },
  extraReducers:(builder)=>{
      builder.addCase(
          fetchPosts.pending, (state,action)=>{
              state.isFetching = true
          }
      ),
      builder.addCase(
          fetchPosts.fulfilled , (state,action)=>{
              state.post = action.payload
              state.isFetching = false
          }
      )
  }
  
  

})

export default postSlice.reducer