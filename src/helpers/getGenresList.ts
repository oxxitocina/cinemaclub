export function getGenresList(genresArray) {
  const genres = [];
  genresArray.genres.map((genre) => {
    genres.push(genre.name);
  });
  return genres.join(", ");
}
