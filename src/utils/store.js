import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "./MenuSlice";
import SearchSlice from "./SearchSlice";
import LiveChatSlice from "./LiveChatSlice";
import SuggestionIdSlice from "./SuggestionIdSlice";
import CommentsSlice from "./CommentsSlice";

const store=configureStore({
reducer:{
    menu:MenuSlice,
    search:SearchSlice,
    chat:LiveChatSlice,
    suggestionId:SuggestionIdSlice,
    comment:CommentsSlice,
}
});

export default store;