import { createSlice } from "@reduxjs/toolkit";

const CommentSlice=createSlice({
    name:"comment",
    initialState:{
        csection:[]
    },
    reducers:{
      addComment:(state,action)=>{
        state.csection.push(action.payload);
      }
    }
})

export const {addComment} = CommentSlice.actions;
export default CommentSlice.reducer; 