import { createSlice } from "@reduxjs/toolkit";

export const toggleMoviePlayerSlice = createSlice({
  name: "toggleMoviePlayer",
  initialState: {
    active: false,
  },
  reducers: {
    togglePlayer: (state) => {
      console.log(1);
      state.active = !state.active;
    },
  },
});

export const { togglePlayer } = toggleMoviePlayerSlice.actions;
export default toggleMoviePlayerSlice.reducer;