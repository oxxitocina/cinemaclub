import { createSlice } from '@reduxjs/toolkit';

export const filteringSlice = createSlice({
  name: 'filtering',
  initialState: {
    genres: []
  },
  reducers: {
    addGenre: (state, action) => {
      state.genres.push(action.payload);
    },
    removeGenre: (state, action) => {
      state.genres.splice(state.genres.indexOf(action.payload), 1);
    },
    setDefault: (state) => {
      state.genres = [];
    }
  }
});

export const { addGenre, removeGenre, setDefault } = filteringSlice.actions;
export default filteringSlice.reducer;
