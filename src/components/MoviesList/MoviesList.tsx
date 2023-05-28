import Grid from "@mui/material/Grid";
import MovieCard from "../MovieCardDesktop/MovieCard";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import { data } from "../../mockData/allMovies";
import { setTotalPages } from "../../app/slices/pagination/paginationSlice";
import useScreen from "../../hooks/useScreen";
import MovieCardFull from "../MovieCardFull/MovieCardFull";

export default function MoviesList({ gridItemSize, paginationType }) {
  const dispatch = useDispatch();
  const lastIndex = useSelector((state) => state.scrollingPagination.lastIndex);
  const firstIndexPage = useSelector((state) => state.pagination.firstIndex);
  const lastIndexPage = useSelector((state) => state.pagination.lastIndex);
  const { isMobile, isTablet } = useScreen();
  const date = useSelector((state) => state.sorting.dateSorting);
  const sortingMethod = useSelector(
    (state) => state.sorting.selectSortingMethod
  );
  const sortingOrder = useSelector((state) => state.sorting.order);
  const genres = useSelector((state) => state.filtering.genres);
  const searchQuery = useSelector((state) => state.searching.searchQuery);
  const favouriteMovies = useSelector(
    (state) => state.addToFavourites.favouriteMovies
  );
  const savedMovies = useSelector((state) => state.addToSaved.savedMovies);

  function sortByPopularityRaiting(movies, ...searchMethod) {
    function getSortingMethod() {
      if (searchMethod.length !== 0) {
        return searchMethod[0];
      } else {
        return useSelector((state) => state.sorting.selectSortingMethod);
      }
    }

    const method = getSortingMethod();

    function compareMovies(firstObject, secondObject) {
      if (firstObject?.[method]?.kp < secondObject?.[method]?.kp) return 1;
      if (firstObject?.[method]?.kp == secondObject?.[method]?.kp) return 0;
      if (firstObject?.[method]?.kp > secondObject?.[method]?.kp) return -1;
    }
    return movies.sort(compareMovies);
  }

  function getMoviesByGenre(movies) {
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

  function getFilteredMovies(data) {
    let movies =
      date != "all" ? data.filter((movie) => movie.year === date) : data;

    movies = sortByPopularityRaiting(movies, sortingMethod);

    if (sortingOrder === "descending") {
      return movies;
    } else {
      return movies.reverse();
    }
  }

  function searchMovies() {
    if (searchQuery.length === 0) {
      return data;
    }
    const foundMovies = data.filter((movie) =>
      movie.name.toUpperCase().includes(searchQuery)
    );
    return foundMovies;
  }

  function sortBySaved(movies) {
    switch (sortingMethod) {
      case "favourites":
        return movies.filter((movie) => favouriteMovies.includes(movie.id));
      case "saved":
        return movies.filter((movie) => savedMovies.includes(movie.id));
      default:
        return movies;
    }
  }

  const search = searchMovies();
  const result = getFilteredMovies(search);
  const temp = getMoviesByGenre(result);
  const temp2 = sortBySaved(temp);
  const totalPages = Math.ceil(temp2.length / 10);
  dispatch(setTotalPages(totalPages));

  const movies =
    paginationType === "scroll"
      ? data.slice(0, lastIndex)
      : temp2.slice(firstIndexPage, lastIndexPage);

  function ResponsiveMovieCard() {
    if (isTablet === true || isMobile === true) {
      return movies.map((movie) => {
        return <MovieCardFull data={movie} gridSize={gridItemSize} />;
      });
    }
    return movies.map((movie) => {
      return <MovieCard data={movie} gridSize={gridItemSize} />;
    });
  }

  return (
    <>
      <Box
        sx={{
          paddingLeft: 3,
          paddingRight: 3,
          paddingBottom: 3,
        }}
      >
        <Grid container spacing={3}>
          {ResponsiveMovieCard()}
        </Grid>
      </Box>
    </>
  );
}
