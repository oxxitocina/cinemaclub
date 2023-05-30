import { useSelector } from "react-redux";

export function sortBySaved(movies) {
  const sortingMethod = useSelector(
    (state) => state.sorting.selectSortingMethod
  );
  const favouriteMovies = useSelector(
    (state) => state.addToFavourites.favouriteMovies
  );
  const savedMovies = useSelector((state) => state.addToSaved.savedMovies);

  switch (sortingMethod) {
    case "favourites":
      return movies.filter((movie) => favouriteMovies.includes(movie.id));
    case "saved":
      return movies.filter((movie) => savedMovies.includes(movie.id));
    default:
      return movies;
  }
}
