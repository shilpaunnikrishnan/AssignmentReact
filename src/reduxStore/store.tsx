import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "../components/features/content/contentSlice";

export default configureStore({
  reducer: {
    content: contentReducer,
  },
});
