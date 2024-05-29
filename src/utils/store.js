import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "./MenuSlice";
import SearchSlice from "./SearchSlice";
import LiveChatSlice from "./LiveChatSlice";
import SuggestionIdSlice from "./SuggestionIdSlice";
import CommentsSlice from "./CommentsSlice";
import MainPageSlice from "./MainPageSlice";

const store=configureStore({
reducer:{
    menu:MenuSlice,
    search:SearchSlice,
    chat:LiveChatSlice,
    suggestionId:SuggestionIdSlice,
    comment:CommentsSlice,
    apiId:MainPageSlice
}
});

export default store;