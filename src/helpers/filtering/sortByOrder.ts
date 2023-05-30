import { useSelector } from "react-redux";

export function sortByOrder(movies) {
  const sortingOrder = useSelector((state) => state.sorting.order);

  if (sortingOrder === "ascending") {
    return movies.reverse();
  } else {
    return movies;
  }
}
