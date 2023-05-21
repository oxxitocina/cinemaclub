import { configureStore } from "@reduxjs/toolkit";
import scrollingPaginationSlice from "./slices/scrollingPagination/scrollingPaginationSlice";
import movieDataSlice from './slices/movieDataApi/movieDataSlice';
import paginationSlice from "./slices/pagination/paginationSlice";
import filteringSlice from "./slices/filtering/filteringSlice";
import sortingSlice from "./slices/sorting/sortingSlice";
import searchingSlice from "./slices/search/searchingSlice";

export default configureStore({
  reducer: {
    scrollingPagination: scrollingPaginationSlice,
    movie: movieDataSlice,
    pagination: paginationSlice,
    filtering: filteringSlice,
    sorting: sortingSlice,
    searching: searchingSlice,
  },
});
