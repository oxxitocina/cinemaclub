import { combineReducers } from "@reduxjs/toolkit";
import scrollingPaginationSlice from "./slices/scrollingPagination/scrollingPaginationSlice";
import movieDataSlice from "./slices/movieDataApi/movieDataSlice";
import paginationSlice from "./slices/pagination/paginationSlice";
import filteringSlice from "./slices/filtering/filteringSlice";
import sortingSlice from "./slices/sorting/sortingSlice";
import searchingSlice from "./slices/search/searchingSlice";
import authorizationSlice from "./slices/authorization/authorizationSlice";
import addToFavouritesSlice from "./slices/addToFavourites/addToFavouritesSlice";
import addToSavedSlice from "./slices/addToLater/addToSavedSlice";
import toggleMoviePlayerSlice from "./slices/toggleMoviePlayer/toggleMoviePlayerSlice";
import toggleFiltersSlice from "./slices/toggleFilters/toggleFiltersSlice";

export const rootReducer = combineReducers({
  scrollingPagination: scrollingPaginationSlice,
  movie: movieDataSlice,
  pagination: paginationSlice,
  filtering: filteringSlice,
  sorting: sortingSlice,
  searching: searchingSlice,
  authorization: authorizationSlice,
  addToFavourites: addToFavouritesSlice,
  addToSaved: addToSavedSlice,
  toggleMoviePlayer: toggleMoviePlayerSlice,
  toggleFilters: toggleFiltersSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
