import { createSlice } from "@reduxjs/toolkit";

const MainPageSlice=createSlice({
    name:"apiId",
    initialState:{
        mainvdioId:[],
    },
    reducers:{
        addApiId:(state,action)=>{
            state.mainvdioId.push(action.payload);
    }
}
})

export const {addApiId}=MainPageSlice.actions;
export default MainPageSlice.reducer;