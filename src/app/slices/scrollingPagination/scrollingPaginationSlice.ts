import { createSlice } from "@reduxjs/toolkit";

export const scrollingPaginationSlice = createSlice({
  name: "scrollingPagination",
  initialState: {
    firstIndex: 0,
    lastIndex: 10,
  },
  reducers: {
    nextPage: (state) => {
      state.lastIndex += 12;
    },
  },
});

export const { nextPage } = scrollingPaginationSlice.actions;
export default scrollingPaginationSlice.reducer;
