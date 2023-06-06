import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
  active: boolean;
}

const initialState: IinitialState = {
  active: false,
};

export const toggleFiltersSlice = createSlice({
  name: "toggleFilter",
  initialState,
  reducers: {
    toggleFilter: (state) => {
      state.active = !state.active;
    },
  },
});

export const { toggleFilter } = toggleFiltersSlice.actions;
export default toggleFiltersSlice.reducer;
