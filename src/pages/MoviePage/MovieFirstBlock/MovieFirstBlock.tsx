import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { movieStyle, dividerStyle } from "./MovieFirstBlockStyle";
import { Imovie } from "../../../app/slices/movieDataApi/movieDataSlice";

export default function MovieFirstBlock({ movieData }: { movieData: Imovie }) {
  return (
    <Box sx={movieStyle}>
      <Typography variant="subtitle1">{movieData.rating.kp}</Typography>
      <Divider orientation="vertical" flexItem sx={dividerStyle} />
      <Typography variant="subtitle1">{movieData.year}</Typography>
      <Divider orientation="vertical" flexItem sx={dividerStyle} />
      <Typography variant="subtitle1">{movieData.movieLength}</Typography>
    </Box>
  );
}
