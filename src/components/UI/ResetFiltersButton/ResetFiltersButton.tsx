import Button from "@mui/material/Button";
import { useAppDispatch } from "../../../app/store";
import { setDefaultValues } from "../../../app/slices/sorting/sortingSlice";
import { changePage } from "../../../app/slices/pagination/paginationSlice";
import { setDefault } from "../../../app/slices/filtering/filteringSlice";
import { setSearch } from "../../../app/slices/search/searchingSlice";

export default function ResetFiltersButton() {
  const dispatch = useAppDispatch();

  function handleButtonClick() {
    dispatch(setDefaultValues());
    dispatch(setDefault());
    dispatch(changePage(1));
    dispatch(setSearch(""));
  }

  return (
    <>
      <Button
        variant="contained"
        onClick={handleButtonClick}
        sx={{
          "@media (max-width:800px)": {
            width: "100%",
          },
        }}
      >
        Сбросить все фильтры
      </Button>
    </>
  );
}
