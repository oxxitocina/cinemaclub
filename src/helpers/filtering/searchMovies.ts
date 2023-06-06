import { data } from "../../mockData/allMovies";
import { useAppSelector } from "../../app/store";

export function searchMovies() {
  const searchQuery = useAppSelector((state) => state.searching.searchQuery);

  if (searchQuery.length === 0) {
    return data;
  }
  const foundMovies = data.filter((movie) =>
    movie.name.toUpperCase().includes(searchQuery)
  );
  return foundMovies;
}
