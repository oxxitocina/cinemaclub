import { createSlice } from "@reduxjs/toolkit";

export const scrollingPaginationSlice = createSlice({
  name: "scrollingPagination",
  initialState: {
    firstIndex: 0,
    lastIndex: 24,
  },
  reducers: {
    nextPage: (state) => {
      state.lastIndex += 24;
    },
  },
});

export const { nextPage } = scrollingPaginationSlice.actions;
export default scrollingPaginationSlice.reducer;
