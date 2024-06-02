import { createSlice } from "@reduxjs/toolkit";

const HeaderSlice=createSlice({
    name:"error",
    initialState:{
        isError:[]
    },
    reducers:{
    closeHeader:(state,action)=>{
        state.isError.push(action.payload);
    }
    }
    });

export const {closeHeader}=HeaderSlice.actions;
export default HeaderSlice.reducer;