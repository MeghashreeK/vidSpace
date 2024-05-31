import { createSlice } from "@reduxjs/toolkit";

const MainPageSlice=createSlice({
    name:"apiId",
    initialState:{
        mainvdioId:[],
    },
    reducers:{
        addApiId:(state,action)=>{
            state.mainvdioId.push(action.payload);
    },
    clearMainVdioId: (state) => {
        state.mainvdioId = [];
    }
}
})

export const {addApiId,clearMainVdioId}=MainPageSlice.actions;
export default MainPageSlice.reducer;
