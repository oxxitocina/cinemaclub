import { useState } from "react";
import MoviesList from "../../components/MoviesList/MoviesList";
import Grid from "@mui/material/Grid";
import Filters from "../../components/Filters/Filters";
import Box from "@mui/material/Box";
import useScreen from "../../hooks/useScreen";
import { Button } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import PagePagination from "../../components/PagePagination/PagePagination";
import { MobileFilterWrapper, DesktopFilterWrapper } from "./MoviesPageStyle";

export default function MoviesPage() {
  const { isMobile, isTablet } = useScreen();
  const [showFilter, setShowFilter] = useState(false);

  function handleClick() {
    setShowFilter(!showFilter);
  }

  function FilterMenu() {
    if (showFilter === true) {
      return (
        <>
          <Box sx={MobileFilterWrapper}>
            <Filters />
          </Box>
        </>
      );
    }
  }

  function BurgerMenu() {
    if (isTablet || isMobile === true) {
      return (
        <Box>
          <Button onClick={handleClick}>
            <TuneIcon />
          </Button>
        </Box>
      );
    }
  }

  return (
    <>
      <Box sx={{ marginTop: 12 }}>
        <Grid container spacing={0}>
          <BurgerMenu />

          <Grid
            item
            xs={3}
            sx={[
              DesktopFilterWrapper,
              { display: `${isTablet || isMobile === true ? "none" : "flex"}` },
            ]}
          >
            <Filters />
          </Grid>

          <FilterMenu />

          <Grid item xs={isTablet || isMobile === true ? 12 : 8}>
            <MoviesList
              gridItemSize={isTablet === true ? 3 : 6}
              paginationType="pages"
            />
          </Grid>
        </Grid>
        <PagePagination />
      </Box>
    </>
  );
}
