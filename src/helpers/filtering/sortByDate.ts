import { useSelector } from "react-redux";

export function sortByDate(moviesArray) {
  const date = useSelector((state) => state.sorting.dateSorting);

  const movies =
    date != "all"
      ? moviesArray.filter((movie) => movie.year === date)
      : moviesArray;

  return movies;
}
