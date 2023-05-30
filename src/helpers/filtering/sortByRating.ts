import { useSelector } from "react-redux";

export function sortByRating(movies) {
  console.log(movies);
  const method = useSelector((state) => state.sorting.selectSortingMethod);

  function compareMovies(firstObject, secondObject) {
    if (firstObject?.[method]?.kp < secondObject?.[method]?.kp) return 1;
    if (firstObject?.[method]?.kp == secondObject?.[method]?.kp) return 0;
    if (firstObject?.[method]?.kp > secondObject?.[method]?.kp) return -1;
  }

  return movies.sort(compareMovies);
}
