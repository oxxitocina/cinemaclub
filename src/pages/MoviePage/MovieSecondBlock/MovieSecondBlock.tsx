import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { blockStyle, dividerStyle } from "./MovieSecondBlockStyle";

export default function MovieSecondBlock({ movieData, genres }) {
  return (
    <Box sx={blockStyle}>
      <Typography variant="subtitle1">{movieData.countries[0].name}</Typography>
      <Divider orientation="vertical" flexItem sx={dividerStyle} />
      <Typography variant="subtitle1">{genres}</Typography>
      <Divider orientation="vertical" flexItem sx={dividerStyle} />
      <Typography variant="subtitle1">{movieData.ratingAgeLimits}</Typography>
    </Box>
  );
}
