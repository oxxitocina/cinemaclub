import { Box, Rating, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import SaveIcon from "../UI/SaveIcon/SaveIcon";
import BookmarkIcon from "../UI/LaterIcon/BookmarkIcon";
import { useNavigate } from "react-router-dom";
import { fetchMovieById } from "../../app/slices/movieDataApi/movieDataSlice";
import { useDispatch } from "react-redux";
import { getGenresList } from "../../helpers/getGenresList";
import {
  paperStyle,
  movieInfoWrapper,
  movieTitleWrapper,
  iconsWrapper,
  ratingWrapper,
} from "./MovieCardStyle";

export default function MovieCard({ data, gridSize }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const URL = data.poster.url;
  const movieGenres = getGenresList(data);

  function handleClick() {
    navigate(`/movie/${data.id}`, {
      replace: true,
      state: {
        movieData: data,
      },
    });
    dispatch(fetchMovieById(data.id));
  }

  return (
    <>
      <Grid item xs={gridSize}>
        <Paper elevation={4} sx={paperStyle} onClick={handleClick}>
          <Stack direction={"row"} spacing={0}>
            <img src={URL} alt="" style={{ height: "13vw" }} />
            <Stack sx={{ width: "100%" }}>
              <Box sx={movieTitleWrapper}>
                <Box
                  sx={{
                    width: "80%",
                  }}
                >
                  <Typography variant="body1" sx={{ flexGrow: 1 }}>
                    {data.name}
                  </Typography>
                </Box>
                <Box sx={iconsWrapper}>
                  <SaveIcon id={data.id} />
                  <BookmarkIcon id={data.id} />
                </Box>
              </Box>

              <Box sx={movieInfoWrapper}>
                <Typography variant="body2" sx={{ flexGrow: 1 }}>
                  {data.year}, {movieGenres}
                </Typography>
              </Box>

              <Box sx={ratingWrapper}>
                <Rating
                  name="read-only"
                  precision={0.1}
                  size="small"
                  value={Number(data.rating.kp) / 2}
                  readOnly
                  sx={{
                    "& .MuiRating-iconFilled": {
                      color: "white",
                    },
                  }}
                />
              </Box>
            </Stack>
          </Stack>
        </Paper>
      </Grid>
    </>
  );
}
