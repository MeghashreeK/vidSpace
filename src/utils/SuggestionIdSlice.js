import { createSlice } from "@reduxjs/toolkit";

const SuggestionIdSlice=createSlice({
name:"suggestionId",
initialState:{
    id:[]
},
reducers:{
    addId:(state,action)=>{
        state.id.push(action.payload);
    }
}
});

export const {addId}=SuggestionIdSlice.actions;
export default SuggestionIdSlice.reducer;