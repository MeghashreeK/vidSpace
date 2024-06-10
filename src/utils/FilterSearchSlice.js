import { createSlice } from "@reduxjs/toolkit";

const FilterSearchSlice = createSlice({
    name: 'filter',
    initialState: {
        searchkeys: [],
    },
    reducers: {
        addkey: (state, action) => {
            state.searchkeys.push(action.payload);
        },
        removekey: (state, action) => {
            state.searchkeys = [];
        }
    }
})

export const { addkey, removekey } = FilterSearchSlice.actions;
export default FilterSearchSlice.reducer;