import { createSlice } from "@reduxjs/toolkit";

export const toggleFiltersSlice = createSlice({
  name: "toggleFilter",
  initialState: {
    active: false,
  },
  reducers: {
    toggleFilter: (state) => {
      state.active = !state.active;
    },
  },
});

export const { toggleFilter } = toggleFiltersSlice.actions;
export default toggleFiltersSlice.reducer;
