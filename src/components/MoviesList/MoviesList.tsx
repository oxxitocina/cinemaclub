import Grid from "@mui/material/Grid";
import MovieCard from "../MovieCardDesktop/MovieCard";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import { data } from "../../mockData/allMovies";
import { setTotalPages } from "../../app/slices/pagination/paginationSlice";
import useScreen from "../../hooks/useScreen";
import MovieCardFull from "../MovieCardFull/MovieCardFull";
import { getSortedMoviesArray } from "../../helpers/getSortedMoviesArray";
import { movieListWrapper } from "./MovieListStyle";

export default function MoviesList({ gridItemSize, paginationType }) {
  const dispatch = useDispatch();
  const lastIndex = useSelector((state) => state.scrollingPagination.lastIndex);
  const firstIndexPage = useSelector((state) => state.pagination.firstIndex);
  const lastIndexPage = useSelector((state) => state.pagination.lastIndex);
  const { isMobile, isTablet } = useScreen();

  const temp2 = getSortedMoviesArray();
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
      <Box sx={movieListWrapper}>
        <Grid container spacing={3}>
          {ResponsiveMovieCard()}
        </Grid>
      </Box>
    </>
  );
}
