import MoviesList from "../../components/MoviesList/MoviesList";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import useScreen from "../../hooks/useScreen";
import { Button, Container } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import PagePagination from "../../components/PagePagination/PagePagination";
import { MobileFilterWrapper, DesktopFilterWrapper } from "./MoviesPageStyle";
import FiltersDesktop from "../../components/Filters/FiltersDesktop";
import FiltersMobile from "../../components/Filters/FiltersMobile";
import { toggleFilter } from "../../app/slices/toggleFilters/toggleFiltersSlice";
import { useAppDispatch, useAppSelector } from "../../app/store";

export default function MoviesPage() {
  const dispatch = useAppDispatch();
  const { isMobile, isTablet } = useScreen();
  const showFilter = useAppSelector((state) => state.toggleFilters.active);

  function handleClick() {
    dispatch(toggleFilter());
  }

  function FilterMenu() {
    if (showFilter === true) {
      return (
        <>
          <Box sx={MobileFilterWrapper}>
            <FiltersMobile />
          </Box>
        </>
      );
    }
    return <></>;
  }

  function BurgerMenu() {
    if (isTablet || isMobile === true) {
      return (
        <>
          <Box sx={{ marginBottom: 2, display: "flex", justifyContent: "end" }}>
            <Button onClick={handleClick}>
              <TuneIcon />
            </Button>
          </Box>
        </>
      );
    }
    return <></>;
  }

  return (
    <>
      <Box sx={{ paddingTop: 12 }}>
        <FilterMenu />
        <Container>
          <BurgerMenu />

          <Box
            sx={{
              display: `${isTablet || isMobile === true ? "none" : "flex"}`,
            }}
          >
            <FiltersDesktop />
          </Box>

          <Grid item xs={isTablet || isMobile === true ? 12 : 8}>
            <MoviesList
              gridItemSize={isTablet === true ? 3 : isMobile ? 6 : 2}
              paginationType="pages"
            />
          </Grid>
          <PagePagination />
        </Container>
      </Box>
    </>
  );
}
