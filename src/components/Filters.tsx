import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  Pagination,
  Paper,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import genres from '../mock_data/genres.json'
import { sorting, dates } from '../mock_data/filters'
import { createTheme, ThemeProvider } from "@mui/material";
import { changePage } from "../app/slices/pagination/paginationSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSortingMethod, filters, changeDate, setDefaultValues } from "../app/slices/sorting/sortingSlice";
import { addGenre, removeGenre, setDefault } from "../app/slices/filtering/filteringSlice";
import { setSearch } from "../app/slices/search/searchingSlice";

export default function Filters() {
  const dispatch = useDispatch();
  const totalPages = useSelector((state) => state.pagination.totalPages);
  const sortingMethod = useSelector((state) => state.sorting.currentSortingMethod)
  const dateSorting = useSelector((state) => state.sorting.dateSorting);
  const filterGenres = useSelector((state) => state.filtering.genres);
  const currentPage = useSelector((state) => state.pagination.page)

  console.log(sortingMethod)
  

  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2'
      }
    },
    components: {
      MuiSelect: {
        styleOverrides: {
          icon: {
              color: 'white'
            },
        }
      },
      MuiPagination: {
        styleOverrides: {
          root: {
            button: {
              color: 'white'
            }
          }
        }
      }
    }
  })

  function handleChange(event, value) {
    dispatch(changePage(value));
  }

  function handleChangeSorting(event) {
    dispatch(changePage(1));
    dispatch(setCurrentSortingMethod(event.target.value));
    dispatch(filters(event.target.value));
  }

  function handleChangeDate(event)  {
    dispatch(changePage(1));
    console.log(event.target.value);
    dispatch(changeDate(event.target.value));
  }

  function handleChangeGenre(event) {
    dispatch(changePage(1));
    if(filterGenres.includes(event.target.value)) {
      dispatch(removeGenre(event.target.value));
    }else{
      dispatch(addGenre(event.target.value));
    }
  }

  function handleButtonClick()  {
    dispatch(setDefaultValues());
    dispatch(setDefault());
    dispatch(changePage(1));
    dispatch(setSearch(''));
  }
  
  return (
    <>
    <ThemeProvider theme={theme}>
      <Box sx={{
         width: '80%',
        }}>
        <Paper
          elevation={3}
          sx={{ backgroundColor: "#1a171e", color: "white" }}
        >
          <Box sx={{ width: "80%", margin: "0 auto" }}>
            <Typography variant="h5" component="h2" sx={{ paddingTop: 2 }}>
              Фильтры:
            </Typography>
            <Button variant="contained" sx={{ width: "100%", marginTop: 1 }} onClick={handleButtonClick}>
              Сбросить все фильтры
            </Button>

            <Typography
              variant="subtitle1"
              component="h2"
              sx={{ marginTop: 2 }}
            >
              Сортировать по:
            </Typography>

            <Select
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                width: "100%",
                height: "3.5vh",
                marginTop: 0.5,
                border: '1px solid white',
                color: 'white',
              }}
              onChange={handleChangeSorting}
              value={sortingMethod}
            >
              {sorting.map((method) => {
                return (
                  <MenuItem value={method.reducer}>{method.name}</MenuItem>
                )
              })}
            </Select>

            <Typography
              variant="subtitle1"
              component="h2"
              sx={{ marginTop: 1 }}
            >
              Год релиза
            </Typography>

            <Select
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                width: "100%",
                height: "3.5vh",
                marginTop: 0.5,
                color: 'white',
                border: '1px solid white'
              }} color="primary"
              value={dateSorting}
              onChange={handleChangeDate}
            >
              <MenuItem value="all">
                <em>Все</em>
              </MenuItem>
              {dates.map((date) => {
                return (
                  <MenuItem value={date}>{date}</MenuItem>
                )
              })}
            </Select>
            

            <FormGroup sx={{
              marginTop: 1,
              }}
              onChange={handleChangeGenre}
              >
              {genres.map((genre) => {
                return (
                  <FormControlLabel control={<Checkbox sx={{color: 'white'}} />} color="primary" label={genre.name} sx={{
                      height: '2.5vh',
                  }} value={genre.name} checked={filterGenres.includes(genre.name)}/>
                )
              })}
            </FormGroup>

            <Box sx={{ marginTop: 2, paddingBottom: 2 }}>
              <Pagination count={totalPages} size="small" color="primary" sx={{
                ".MuiPagination-ul": {
                  color: 'white',
                }
              }} onChange={handleChange} page={currentPage}/>
            </Box>
          </Box>
        </Paper>
      </Box>
      </ThemeProvider>
    </>
  );
}
