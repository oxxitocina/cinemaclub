import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import SaveIcon from "../UI/SaveIcon/SaveIcon";
import BookmarkIcon from "../UI/LaterIcon/BookmarkIcon";
import { fetchMovieById } from "../../app/slices/movieDataApi/movieDataSlice";
import {
  movieIconsWrapper,
  movieCardWrapper,
  movieImageStyle,
  typographyStyle,
} from "./MovieCardFullStyle";

export default function MovieCardFull({ data, gridSize }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const URL = data.poster.url;

  return (
    <>
      <Grid item xs={gridSize}>
        <Box
          component="div"
          onClick={() => {
            navigate(`/movie/${data.id}`, {
              replace: true,
              state: {
                movieData: data,
              },
            });
            dispatch(fetchMovieById(data.id));
          }}
          sx={movieCardWrapper}
        >
          <Box sx={movieIconsWrapper}>
            <SaveIcon id={data.id} />
            <BookmarkIcon id={data.id} />
          </Box>
          <img src={URL} alt="" style={movieImageStyle} />
        </Box>
        <Typography variant="body2" sx={typographyStyle}>
          {data.name}
        </Typography>
      </Grid>
    </>
  );
}
