import Grid from "@mui/material/Grid";
import MovieCard from "./MovieCard";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import { data } from '../mock_data/allMovies';
import { setTotalPages } from "../app/slices/pagination/paginationSlice";

export default function MoviesList({ gridItemSize, paginationType }) {
  const dispatch = useDispatch();
  const lastIndex = useSelector((state) => state.scrollingPagination.lastIndex);
  const firstIndexPage = useSelector((state) => state.pagination.firstIndex);
  const lastIndexPage = useSelector((state) => state.pagination.lastIndex);

  const date = useSelector((state) => state.sorting.dateSorting);
  const sortingMethod = useSelector((state) => state.sorting.selectSortingMethod);
  const sortingOrder = useSelector((state) => state.sorting.order);
  const genres = useSelector((state) => state.filtering.genres);
  const searchQuery = useSelector((state) => state.searching.searchQuery);

  console.log(sortingMethod);
  console.log(sortingOrder);

  function sortByPopularityRaiting(movies, ...searchMethod)  {
    
    function getSortingMethod() {
        if(searchMethod.length !== 0) {
          return searchMethod[0];
        }else{
          return useSelector((state) => state.sorting.selectSortingMethod)
        }
    }

    const method = getSortingMethod();

    function compareMovies(firstObject, secondObject) {
        if (firstObject?.[method]?.kp < secondObject?.[method]?.kp) return 1;
        if (firstObject?.[method]?.kp == secondObject?.[method]?.kp) return 0;
        if (firstObject?.[method]?.kp > secondObject?.[method]?.kp) return -1;
      }
    return movies.sort(compareMovies);
}

function getMoviesByGenre(movies) {
  if(genres.length === 0) {
    return movies;
  }

  const moviesTemp = [];

  movies.map((movie) => {
    for(let j=0; j<movie.genres.length; j++) {
      if(moviesTemp.includes(movie))  {
        break;
      }
      for(let k=0; k<genres.length; k++)  {
        if(genres[k] == movie.genres[j].name)  {
          moviesTemp.push(movie);
          break;
        }
      }
  }
  })
  return moviesTemp;
}

  function getFilteredMovies(data)  {
      let movies = date != 'all' ? data.filter(movie => movie.year === date) : data;

      movies = sortByPopularityRaiting(movies, sortingMethod);
    
      if(sortingOrder === 'descending')  {
        return movies;
      }else{
        return movies.reverse();
      }
  }

  function searchMovies() {
    if(searchQuery.length === 0)  {
      return data;
    }
    const foundMovies = data.filter(movie => movie.name.toUpperCase().includes(searchQuery));
    return foundMovies;
  }

  
  const search = searchMovies();
  const result = getFilteredMovies(search);
  const temp = getMoviesByGenre(result);
  const totalPages = Math.ceil(temp.length/10);
  dispatch(setTotalPages(totalPages));
  

  const movies = paginationType === 'scroll' ? data.slice(0, lastIndex) : temp.slice(firstIndexPage, lastIndexPage)

  return (
    <>
      <Box>
        <Grid container spacing={3}>
          {movies.map((movie) => {
            return <MovieCard data={movie} gridSize={gridItemSize} />;
          })}
        </Grid>
      </Box>
    </>
  );
}
