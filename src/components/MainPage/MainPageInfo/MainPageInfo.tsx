import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import { getGenresList } from "../../../helpers/getGenresList";
import { Imovie } from "../../../app/slices/movieDataApi/movieDataSlice";

export default function MainPageInfo({ data }: { data: Imovie }) {
  const genres = getGenresList(data);
  return (
    <>
      <Typography variant="h1" component="h2">
        {data.name}
      </Typography>
      <Box>
        <Stack direction={"row"} spacing={1}>
          <StarIcon />
          <Typography>{data.rating.kp.toFixed(1)}</Typography>
          <Typography>{data.year}</Typography>
          <Typography>{data.movieLength} минут</Typography>
        </Stack>
      </Box>
      <Box>
        <Stack direction={"row"} spacing={1}>
          <Typography>{data.countries[0].name}</Typography>
          <Typography>{genres}</Typography>
        </Stack>
      </Box>
    </>
  );
}
