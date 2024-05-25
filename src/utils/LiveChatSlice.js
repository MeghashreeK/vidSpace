import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const LiveChatSlice = createSlice({
    name: "chat",
    initialState: {
        message: []
    },
    reducers: {
        addMessage: (state, action) => {
            state.message.splice(LIVE_CHAT_COUNT, 1);
            state.message.unshift(action.payload);
        }
    }

})

export const { addMessage } = LiveChatSlice.actions;
export default LiveChatSlice.reducer;