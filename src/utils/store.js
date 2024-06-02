import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "./MenuSlice";
import SearchSlice from "./SearchSlice";
import LiveChatSlice from "./LiveChatSlice";
import SuggestionIdSlice from "./SuggestionIdSlice";
import CommentsSlice from "./CommentsSlice";
import MainPageSlice from "./MainPageSlice";
import HeaderSlice from "./HeaderSlice";

const store=configureStore({
reducer:{
    menu:MenuSlice,
    search:SearchSlice,
    chat:LiveChatSlice,
    suggestionId:SuggestionIdSlice,
    comment:CommentsSlice,
    apiId:MainPageSlice,
    error:HeaderSlice
}
});

export default store;