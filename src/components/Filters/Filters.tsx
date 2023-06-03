import PagePagination from "../PagePagination/PagePagination";
import GenresSelect from "../UI/FilterSeletcts/GenresSelect/GenresSelect";
import GenresCheckBoxes from "../UI/GenresCheckboxes/GenresCheckBoxes";
import useScreen from "../../hooks/useScreen";
import DateSelect from "../UI/FilterSeletcts/DateSelect/DateSelect";
import SortingSelect from "../UI/FilterSeletcts/SortingSelect/SortingSelect";
import ResetFiltersButton from "../UI/ResetFiltersButton/ResetFiltersButton";
import { Box, Paper, Typography } from "@mui/material";
import {
  paperStyle,
  pagePaginationWrapper,
  filtersWrapper,
} from "./FiltersStyle";

export default function Filters() {
  const { isMobile, isTablet } = useScreen();

  function ResponsiveGenresFilter() {
    if (isTablet || isMobile === true) {
      return <GenresSelect />;
    }
    return <GenresCheckBoxes />;
  }

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Paper elevation={3} sx={paperStyle}>
          <Box sx={filtersWrapper}>
            <Typography variant="h5" component="h2" sx={{ paddingTop: 2 }}>
              Фильтры:
            </Typography>

            <ResetFiltersButton />
            <SortingSelect />
            <DateSelect />
            <ResponsiveGenresFilter />

            <Box sx={pagePaginationWrapper}>
              <PagePagination />
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
