import Box from "@mui/material/Box";
import MoviesList from "../MoviesList/MoviesList";
import useScreen from "../../hooks/useScreen";
import MovieCategoryNavigation from "../UI/MovieCategoryNavigation/MovieCategoryNavigation";
import LoadMoreButton from "../UI/LoadMoreButton/LoadMoreButton";
import { movieListWrapper } from "./MainPageMoviesListStyle";

export default function MainPageMoviesList() {
  const { isMobile, isTablet } = useScreen();

  return (
    <>
      <Box sx={movieListWrapper}>
        <MovieCategoryNavigation title={"Фильмы"} />

        <Box sx={movieListWrapper}>
          <MoviesList
            gridItemSize={isTablet === true ? 3 : isMobile ? 6 : 2}
            paginationType="scroll"
          />
        </Box>

        <LoadMoreButton />
      </Box>
    </>
  );
}
