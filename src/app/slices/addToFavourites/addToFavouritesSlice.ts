import { createSlice } from "@reduxjs/toolkit";

export const addToFavouritesSlice = createSlice({
  name: "FavouritesMovies",
  initialState: {
    favouriteMovies: JSON.parse(localStorage.getItem("favouriteMovies")) || [],
  },
  reducers: {
    addToFavourites: (state, action) => {
      state.favouriteMovies.push(action.payload);
    },
    removeFromFavourites: (state, action) => {
      state.favouriteMovies.splice(
        state.favouriteMovies.indexOf(action.payload),
        1
      );
    },
  },
});

export const { addToFavourites, removeFromFavourites } =
  addToFavouritesSlice.actions;
export default addToFavouritesSlice.reducer;
