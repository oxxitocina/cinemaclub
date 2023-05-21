import { Box, Button, Rating, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import SaveIcon from "./UI/SaveIcon/SaveIcon";
import BookmarkIcon from "./UI/LaterIcon/BookmarkIcon";
import genres from '../mock_data/genres.json'
import { useNavigate } from "react-router-dom";
import { fetchMovieById } from "../app/slices/movieDataApi/movieDataSlice";
import { useDispatch } from "react-redux";

export default function MovieCard({ data, gridSize }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const imagePath = data.poster_path || data.backdrop_path;
  const URL = data.poster.url;

  function getGenres(currentGenres)  {
    const movieGenres = [];
    
    currentGenres.map((genre) => {
      if(genres.map((g) => g.name === genre.name)) {
        movieGenres.push(genre.name)
      }
  })
  return movieGenres.join(', ');
}

  
  const movieGenres = getGenres(data.genres);

  return (
    <>
      <Grid item xs={gridSize}>
        <Paper
          elevation={4}
          sx={{
            backgroundColor: "#1a171e",
            color: "white",
            border: "90%",
            cursor: 'pointer',
            "&:hover": {
              border: '1px solid #1976d2',
              padding: 1
            }
          }}
          onClick={() => {
            navigate(`/movie/${data.id}`, {
              replace: true,
              state: {
                movieData: data
              }
          });
            dispatch(fetchMovieById(data.id));
        }}
        >
          <Stack direction={"row"} spacing={0}>
            <img src={URL} alt="" style={{ width: "8.5vw", height: "21vh" }} />
            <Stack sx={{ width: "100%" }}>
              <Box
                sx={{
                  padding: 0.5,
                  paddingLeft: 1,
                  display: 'flex',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{
                  width: '80%'
                }}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  {/* {data.title} */}
                  {data.name}
                </Typography>
                </Box>
                <Box sx={{
                  display: 'flex',
                  gap: '3px',
                }}>
                    <SaveIcon/>
                    <BookmarkIcon/>
                </Box>
              </Box>

              <Box
                sx={{
                  padding: 0.5,
                  paddingLeft: 1,
                  width: '80%'
                }}
              >
                <Typography
                  variant="body2"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                   {/* {data.release_date.slice(0, 4)}, {movieGenres} */}
                   {data.year}, {movieGenres}
                </Typography>
              </Box>

              <Box sx={{
                padding: 0.5,
                paddingLeft: 1,
              }}>
                <Rating name="read-only" precision={0.1} size="small" value={Number(data.rating.kp)/2} readOnly sx={{
                  "& .MuiRating-iconFilled": {
                    color: "white"
                  },
                }}/>
              </Box>
            </Stack>
          </Stack>
        </Paper>
      </Grid>
    </>
  );
}
