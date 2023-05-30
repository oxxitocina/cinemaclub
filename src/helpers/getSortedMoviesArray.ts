import { sortByDate } from "./filtering/sortByDate";
import { sortByOrder } from "./filtering/sortByOrder";
import { sortByRating } from "./filtering/sortByRating";
import { sortByGenres } from "./filtering/sortByGenres";
import { sortBySaved } from "./filtering/sortBySaved";
import { searchMovies } from "./filtering/searchMovies";

export function getSortedMoviesArray() {
  const movies = sortByOrder(
    sortBySaved(sortByGenres(sortByRating(sortByDate(searchMovies()))))
  );

  return movies;
}
