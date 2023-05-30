import { useSelector } from "react-redux";

export function sortByGenres(movies) {
  const genres = useSelector((state) => state.filtering.genres);
  if (genres.length === 0) {
    return movies;
  }

  const moviesTemp = [];

  movies.map((movie) => {
    for (let j = 0; j < movie.genres.length; j++) {
      if (moviesTemp.includes(movie)) {
        break;
      }
      for (let k = 0; k < genres.length; k++) {
        if (genres[k] == movie.genres[j].name) {
          moviesTemp.push(movie);
          break;
        }
      }
    }
  });
  return moviesTemp;
}
