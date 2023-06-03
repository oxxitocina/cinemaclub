import Box from "@mui/material/Box";
import ResetFiltersButton from "../UI/ResetFiltersButton/ResetFiltersButton";
import SortingSelect from "../UI/FilterSeletcts/SortingSelect/SortingSelect";
import DateSelect from "../UI/FilterSeletcts/DateSelect/DateSelect";
import GenresSelect from "../UI/FilterSeletcts/GenresSelect/GenresSelect";

export default function FiltersDesktop() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "35px",
          justifyContent: "space-between",
          marginBottom: 2,
        }}
      >
        <Box sx={{ display: "flex", height: "100%", gap: "10px" }}>
          <SortingSelect />
          <DateSelect />
          <GenresSelect />
        </Box>
        <ResetFiltersButton />
      </Box>
    </>
  );
}
