import { createSlice } from "@reduxjs/toolkit";

const FilterSearchSlice=createSlice({
    name:'filter',
    initialState:{
        searchkeys:[],
    },
    reducers:{
        addkey:(state,action)=>{
            state.searchkeys.push(action.payload);
        }
    }
})

export const {addkey}=FilterSearchSlice.actions;
export default FilterSearchSlice.reducer;