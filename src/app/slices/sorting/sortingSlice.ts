import { createSlice } from '@reduxjs/toolkit';

export const sortingSlice = createSlice({
  name: 'sorting',
  initialState: {
    selectSortingMethod: 'votes',
    order: 'descending',
    dateSorting: 'all',
    currentSortingMethod: 'popularityDescending',
  },
  reducers: {
    setDefaultValues: (state) => {
      state.selectSortingMethod = 'votes';
      state.order = 'descending';
      state.dateSorting = 'all';
      state.currentSortingMethod = 'popularityDescending';
    },
    changeDate: (state, action) => {
      state.dateSorting = action.payload;
    },
    setCurrentSortingMethod: (state, action) => {
      state.currentSortingMethod = action.payload;
    },
    filters: (state, action) => {
        switch (action.payload) {
          case 'popularityDescending':
            state.selectSortingMethod = 'votes';
            state.order = 'descending';
            break;
          case 'popularityAscending':
            state.selectSortingMethod = 'votes';
            state.order = 'ascending';
            break;
          case 'ratingDescending':
            state.selectSortingMethod = 'rating';
            state.order = 'descending';
            break;
          case 'raitingAscending':
            state.selectSortingMethod = 'rating';
            state.order = 'ascending';
            break;
          case 'favourites':
            state.selectSortingMethod = 'favourites';
            state.order = 'descending';
            break;
          case 'saved':
            state.selectSortingMethod = 'saved';
            state.order = 'descending';
            break;
        }
    },
  }
});

export const {
  changeDate,
  filters,
  setCurrentSortingMethod,
  setDefaultValues
} = sortingSlice.actions;
export default sortingSlice.reducer;
