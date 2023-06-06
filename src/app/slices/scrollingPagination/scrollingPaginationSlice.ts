import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
  firstIndex: number;
  lastIndex: number;
}

const initialState: IinitialState = {
  firstIndex: 0,
  lastIndex: 24,
};

export const scrollingPaginationSlice = createSlice({
  name: "scrollingPagination",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.lastIndex += 24;
    },
  },
});

export const { nextPage } = scrollingPaginationSlice.actions;
export default scrollingPaginationSlice.reducer;
