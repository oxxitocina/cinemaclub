import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MoviesList from "./MoviesList";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux/es/exports";
import { nextPage } from "../app/slices/scrollingPagination/scrollingPaginationSlice";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function MainPageMoviesList() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(nextPage());
  }

  return (
    <>
      <Box
        sx={{
          marginTop: 3,
        }}
      >
        <Box
          sx={{
            color: "white",
            marginTop: 1,
            borderLeft: '3px solid #1976d2',
            paddingLeft: '10px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Typography variant="h5">Популярные фильмы</Typography>
          <ArrowForwardIosIcon/>
        </Box>

        <Box
          sx={{
            width: "100%",
            margin: "0 auto",
            marginTop: 2,
          }}
        >
          <MoviesList gridItemSize={6} paginationType='scroll'/>
        </Box>

        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 3
        }}>
          <Button onClick={handleClick} variant="contained">
            ... Загрузить еще
          </Button>
        </Box>
      </Box>
    </>
  );
}
