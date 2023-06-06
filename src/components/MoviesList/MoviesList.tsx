import Grid from "@mui/material/Grid";
import { useAppDispatch, useAppSelector } from "../../app/store";
import Box from "@mui/material/Box";
import { data } from "../../mockData/allMovies";
import { setTotalPages } from "../../app/slices/pagination/paginationSlice";
import MovieCardFull from "../MovieCardFull/MovieCardFull";
import { getSortedMoviesArray } from "../../helpers/getSortedMoviesArray";
import { movieListWrapper } from "./MovieListStyle";
import { Imovie } from "../../app/slices/movieDataApi/movieDataSlice";

interface ComponentProps {
  gridItemSize: number;
  paginationType: string;
}

export default function MoviesList({
  gridItemSize,
  paginationType,
}: ComponentProps) {
  const dispatch = useAppDispatch();
  const lastIndex = useAppSelector(
    (state) => state.scrollingPagination.lastIndex
  );
  const firstIndexPage = useAppSelector((state) => state.pagination.firstIndex);
  const lastIndexPage = useAppSelector((state) => state.pagination.lastIndex);

  const temp2 = getSortedMoviesArray();
  const totalPages = Math.ceil(temp2.length / 18);
  dispatch(setTotalPages(totalPages));

  const movies: Imovie[] =
    paginationType === "scroll"
      ? data.slice(0, lastIndex)
      : temp2.slice(firstIndexPage, lastIndexPage);

  return (
    <>
      <Box sx={movieListWrapper}>
        <Grid container spacing={3}>
          {movies.map((movie) => {
            return (
              <MovieCardFull
                key={movie.id}
                data={movie}
                gridSize={gridItemSize}
              />
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
