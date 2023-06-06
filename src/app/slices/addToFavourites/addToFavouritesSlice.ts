import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IinitialState {
  favouriteMovies: number[];
}

const initialState: IinitialState = {
  favouriteMovies: JSON.parse(localStorage.getItem("favouriteMovies") || "[]"),
};

export const addToFavouritesSlice = createSlice({
  name: "FavouritesMovies",
  initialState,
  reducers: {
    addToFavourites: (state, action: PayloadAction<number>) => {
      state.favouriteMovies.push(action.payload);
    },
    removeFromFavourites: (state, action: PayloadAction<number>) => {
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
