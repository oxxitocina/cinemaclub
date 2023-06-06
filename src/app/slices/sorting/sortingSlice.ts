import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IinitialState {
  selectSortingMethod: string;
  order: string;
  dateSorting: string;
  currentSortingMethod: string;
}

const initialState: IinitialState = {
  selectSortingMethod: "votes",
  order: "descending",
  dateSorting: "all",
  currentSortingMethod: "popularityDescending",
};

export const sortingSlice = createSlice({
  name: "sorting",
  initialState,
  reducers: {
    setDefaultValues: (state) => {
      state.selectSortingMethod = "votes";
      state.order = "descending";
      state.dateSorting = "all";
      state.currentSortingMethod = "popularityDescending";
    },
    changeDate: (state, action: PayloadAction<string>) => {
      state.dateSorting = action.payload;
    },
    setCurrentSortingMethod: (state, action: PayloadAction<string>) => {
      state.currentSortingMethod = action.payload;
    },
    filters: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case "popularityDescending":
          state.selectSortingMethod = "votes";
          state.order = "descending";
          break;
        case "popularityAscending":
          state.selectSortingMethod = "votes";
          state.order = "ascending";
          break;
        case "ratingDescending":
          state.selectSortingMethod = "rating";
          state.order = "descending";
          break;
        case "raitingAscending":
          state.selectSortingMethod = "rating";
          state.order = "ascending";
          break;
        case "favourites":
          state.selectSortingMethod = "favourites";
          state.order = "descending";
          break;
        case "saved":
          state.selectSortingMethod = "saved";
          state.order = "descending";
          break;
      }
    },
  },
});

export const {
  changeDate,
  filters,
  setCurrentSortingMethod,
  setDefaultValues,
} = sortingSlice.actions;
export default sortingSlice.reducer;
