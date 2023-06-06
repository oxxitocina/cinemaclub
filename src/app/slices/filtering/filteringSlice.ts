import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IinitialState {
  genres: string[];
}

const initialState: IinitialState = {
  genres: [],
};

export const filteringSlice = createSlice({
  name: "filtering",
  initialState,
  reducers: {
    addGenre: (state, action: PayloadAction<string>) => {
      state.genres.push(action.payload);
    },
    removeGenre: (state, action: PayloadAction<string>) => {
      state.genres.splice(state.genres.indexOf(action.payload), 1);
    },
    setDefault: (state) => {
      state.genres = [];
    },
  },
});

export const { addGenre, removeGenre, setDefault } = filteringSlice.actions;
export default filteringSlice.reducer;
