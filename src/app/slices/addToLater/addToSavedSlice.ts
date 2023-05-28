import { createSlice } from "@reduxjs/toolkit";

export const addToSavedSlice = createSlice({
  name: "addToSaved",
  initialState: {
    savedMovies: JSON.parse(localStorage.getItem("savedMovies")) || [],
  },
  reducers: {
    addToSaved: (state, action) => {
      state.savedMovies.push(action.payload);
    },
    removeFromSaved: (state, action) => {
      state.savedMovies.splice(state.savedMovies.indexOf(action.payload), 1);
    },
  },
});

export const { addToSaved, removeFromSaved } = addToSavedSlice.actions;
export default addToSavedSlice.reducer;
