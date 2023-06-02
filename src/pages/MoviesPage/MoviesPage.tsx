import { useState } from "react";
import MoviesList from "../../components/MoviesList/MoviesList";
import Grid from "@mui/material/Grid";
import Filters from "../../components/Filters/Filters";
import Box from "@mui/material/Box";
import useScreen from "../../hooks/useScreen";
import { Button, Container } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import PagePagination from "../../components/PagePagination/PagePagination";
import { MobileFilterWrapper, DesktopFilterWrapper } from "./MoviesPageStyle";
import Filters2 from "../../components/Filters/Filters2";
import Filters3 from "../../components/Filters/Filters3";
import { toggleFilter } from "../../app/slices/toggleFilters/toggleFiltersSlice";
import { useDispatch, useSelector } from "react-redux";

export default function MoviesPage() {
  const dispatch = useDispatch();
  const { isMobile, isTablet } = useScreen();
  const showFilter = useSelector((state) => state.toggleFilters.active);


  function handleClick() {
    dispatch(toggleFilter());
  }

  function FilterMenu() {
    if (showFilter === true) {
      // document.body.style.overflow = 'hidden';
      return (
        <>
          <Box sx={MobileFilterWrapper}>
            <Filters3/>
          </Box>
        </>
      );
    }else{
      document.body.style.overflow = 'scroll';
    }
  }

  function BurgerMenu() {
    if (isTablet || isMobile === true) {
      return (
        <Box sx={{marginBottom: 2, display: 'flex', justifyContent: 'end'}}>
          <Button onClick={handleClick}>
            <TuneIcon />
          </Button>
        </Box>
      );
    }
  }

  return (
    // <>
    //   <Box sx={{ marginTop: 12 }}>
    //     <Grid container spacing={0}>
    //       <BurgerMenu />

    //       {/* <Grid
    //         item
    //         xs={3}
    //         sx={[
    //           DesktopFilterWrapper,
    //           { display: `${isTablet || isMobile === true ? "none" : "flex"}` },
    //         ]}
    //       >
    //         <Filters />
    //       </Grid> */}
    //       <Filters2 />

    //       <FilterMenu />
          
    //       <Grid item xs={isTablet || isMobile === true ? 12 : 8}>
    //         <MoviesList
    //           gridItemSize={isTablet === true ? 3 : 2}
    //           paginationType="pages"
    //         />
    //       </Grid>
    //     </Grid>
    //     <PagePagination />
    //   </Box>
    // </>
    <>
      <Box sx={{ marginTop: 12 }}>
      <FilterMenu />
        <Container>
        
          <BurgerMenu />

          {/* <Grid
            item
            xs={3}
            sx={[
              DesktopFilterWrapper,
              { display: `${isTablet || isMobile === true ? "none" : "flex"}` },
            ]}
          >
            <Filters />
          </Grid> */}
          <Box sx={{display: `${isTablet || isMobile === true ? "none" : "flex"}`}}>
            <Filters2 />
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
