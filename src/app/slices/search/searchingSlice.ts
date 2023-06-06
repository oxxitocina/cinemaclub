import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IinitialState {
  searchQuery: string;
}

const initialState: IinitialState = {
  searchQuery: "",
};

export const searchingSlice = createSlice({
  name: "searching",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload.toUpperCase();
    },
  },
});

export const { setSearch } = searchingSlice.actions;
export default searchingSlice.reducer;
