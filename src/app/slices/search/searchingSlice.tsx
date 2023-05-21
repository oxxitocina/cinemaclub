import { createSlice } from '@reduxjs/toolkit';

export const searchingSlice = createSlice({
  name: 'searching',
  initialState: {
    searchQuery: '',
  },
  reducers: {
    setSearch: (state, action) => {
        state.searchQuery = action.payload.toUpperCase();
    }
  }
});

export const { setSearch } = searchingSlice.actions;
export default searchingSlice.reducer;
