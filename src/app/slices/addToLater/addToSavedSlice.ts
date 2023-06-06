import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IinitialState {
  savedMovies: string[];
}

const initialState: IinitialState = {
  savedMovies: JSON.parse(localStorage.getItem("savedMovies") || "[]"),
};

export const addToSavedSlice = createSlice({
  name: "addToSaved",
  initialState,
  reducers: {
    addToSaved: (state, action: PayloadAction<string>) => {
      state.savedMovies.push(action.payload);
    },
    removeFromSaved: (state, action: PayloadAction<string>) => {
      state.savedMovies.splice(state.savedMovies.indexOf(action.payload), 1);
    },
  },
});

export const { addToSaved, removeFromSaved } = addToSavedSlice.actions;
export default addToSavedSlice.reducer;
