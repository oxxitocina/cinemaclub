import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";

export default function MainPageInfo({ data }) {
  return (
    <>
      <Typography variant="h1" component="h2">
        {data.name}
      </Typography>
      <Box>
        <Stack direction={"row"} spacing={1}>
          <StarIcon />
          <Typography>{data.raiting}</Typography>
          <Typography>{data.year}</Typography>
          <Typography>2ч 22мин</Typography>
        </Stack>
      </Box>
      <Box>
        <Stack direction={"row"} spacing={1}>
          <Typography>{data.country}</Typography>
          <Typography>Военный,боевик,фэнтези</Typography>
          <Typography>{data.age}</Typography>
        </Stack>
      </Box>
    </>
  );
}
