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

  const temp2 = getSortedMoviesArray();
  const totalPages = Math.ceil(temp2.length / 18);
  dispatch(setTotalPages(totalPages));

  const movies =
    paginationType === "scroll"
      ? data.slice(0, lastIndex)
      : temp2.slice(firstIndexPage, lastIndexPage);

  return (
    <>
      <Box sx={movieListWrapper}>
        <Grid container spacing={3}>
          {movies.map((movie) => {
          return (
            <MovieCardFull key={movie.id} data={movie} gridSize={gridItemSize} />
          )
          })}
        </Grid>
      </Box>
    </>
  );
}
