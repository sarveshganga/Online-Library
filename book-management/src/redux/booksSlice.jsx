import { createSlice } from "@reduxjs/toolkit";
import { books } from "../utils/mackData";

const booksSlice = createSlice({
  name: "books",
  initialState: books,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
