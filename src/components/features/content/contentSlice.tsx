import { createSlice } from "@reduxjs/toolkit";
import { contents } from "../../../utils/content";

export const contentSlice = createSlice({
  name: "content",
  initialState: {
    contentsArray: [],
  },
  reducers: {
    getContents: (state: any) => {
      state.contentsArray = contents;
    },
  },
});

export const { getContents } = contentSlice.actions;
export const selectContent = (state: any) => state.content.contentsArray;
export default contentSlice.reducer;
