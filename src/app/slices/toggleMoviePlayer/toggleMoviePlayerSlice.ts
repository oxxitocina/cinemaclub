import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
  active: boolean;
}

const initialState: IinitialState = {
  active: false,
};

export const toggleMoviePlayerSlice = createSlice({
  name: "toggleMoviePlayer",
  initialState,
  reducers: {
    togglePlayer: (state) => {
      state.active = !state.active;
    },
  },
});

export const { togglePlayer } = toggleMoviePlayerSlice.actions;
export default toggleMoviePlayerSlice.reducer;
