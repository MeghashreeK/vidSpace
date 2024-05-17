import { createSlice } from "@reduxjs/toolkit";

const MenuSlice=createSlice({
name:"menu",
initialState:{
    isMenuOpen:true
},
reducers:{
toggleMenu:(state)=>{
    state.isMenuOpen=!(state.isMenuOpen);
}
}
});

export const {toggleMenu} =MenuSlice.actions;
export default  MenuSlice.reducer;