import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IinitialState {
  firstIndex: number;
  lastIndex: number;
  totalPages: number;
  page: number;
}

const initialState: IinitialState = {
  firstIndex: 0,
  lastIndex: 18,
  totalPages: 4,
  page: 1,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    firstPage: (state) => {
      state.page = 1;
      state.firstIndex = 0;
      state.lastIndex = 18;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
    changePage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
      state.lastIndex = 18 * action.payload;
      state.firstIndex = state.lastIndex - 18;
    },
  },
});

export const { firstPage, setTotalPages, changePage } = paginationSlice.actions;
export default paginationSlice.reducer;
