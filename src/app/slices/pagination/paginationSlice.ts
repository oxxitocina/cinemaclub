import { createSlice } from "@reduxjs/toolkit";

export const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    firstIndex: 0,
    lastIndex: 10,
    totalPages: 4,
    page: 1,
  },
  reducers: {
    firstPage: (state) => {
      state.page = 1;
      state.firstIndex = 0;
      state.lastIndex = 10;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    changePage: (state, action) => {
      state.page = action.payload;
      state.lastIndex = 10 * action.payload;
      state.firstIndex = state.lastIndex - 10;
    },
  },
});

export const { firstPage, setTotalPages, changePage } = paginationSlice.actions;
export default paginationSlice.reducer;
