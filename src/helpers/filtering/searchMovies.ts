import { data } from "../../mockData/allMovies";
import { useSelector } from "react-redux";

export function searchMovies() {
  const searchQuery = useSelector((state) => state.searching.searchQuery);

  if (searchQuery.length === 0) {
    return data;
  }
  const foundMovies = data.filter((movie) =>
    movie.name.toUpperCase().includes(searchQuery)
  );
  return foundMovies;
}
