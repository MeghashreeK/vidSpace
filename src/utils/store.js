import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "./MenuSlice";
import SearchSlice from "./SearchSlice";
import LiveChatSlice from "./LiveChatSlice";

const store=configureStore({
reducer:{
    menu:MenuSlice,
    search:SearchSlice,
    chat:LiveChatSlice
}
});

export default store;