import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import MoviePlayer from "../../components/MoviePlayer/MoviePlayer";
import LoadingCircle from "../../components/UI/LoadingCircle/LoadingCircle";
import { getGenresList } from "../../helpers/getGenresList";
import { mainPage, dataWrapper, descriptionWrapper } from "./MoviePageStyle";
import MovieFirstBlock from "./MovieFirstBlock/MovieFirstBlock";
import MovieSecondBlock from "./MovieSecondBlock/MovieSecondBlock";
import MovieThirdBlock from "./MovieThirdBlock/MovieThirdBlock";

export default function MoviePage() {
  const loading = useSelector((state) => state.movie.loading);
  const location = useLocation();
  const movieData = location.state.movieData;
  const genres = getGenresList(movieData);
  const showPlayer = useSelector((state) => state.toggleMoviePlayer.active);

  function Loader() {
    if (loading == "loading") {
      return <LoadingCircle />;
    }
  }

  function ToggleMoviePlayer() {
    if (showPlayer === true) {
      return <MoviePlayer id={movieData.id} />;
    }
  }

  return (
    <>
      <Loader />
      <ToggleMoviePlayer />

      <Box
        sx={[
          mainPage,
          {
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url(${movieData.poster.url})`,
          },
        ]}
      >
        <Container>
          <Box sx={dataWrapper}>
            <Box sx={{ height: "50vh" }}>
              <Box sx={{ width: "10vw", "@media (max-width:800px)": {
                width: "150px"
              }, }}>
                <img style={{ width: "100%" }} src={movieData?.logo?.url}></img>
              </Box>

              <MovieFirstBlock movieData={movieData} />
              <MovieSecondBlock movieData={movieData} genres={genres} />
              <MovieThirdBlock id={movieData.id} />

              <Box sx={descriptionWrapper}>
                <Typography>{movieData.shortDescription}</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
