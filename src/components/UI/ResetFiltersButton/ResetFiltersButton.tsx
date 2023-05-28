import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { setDefaultValues } from "../../../app/slices/sorting/sortingSlice";
import { changePage } from "../../../app/slices/pagination/paginationSlice";
import { setDefault } from "../../../app/slices/filtering/filteringSlice";
import { setSearch } from "../../../app/slices/search/searchingSlice";

export default function ResetFiltersButton() {
  const dispatch = useDispatch();

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
        sx={{ width: "100%", marginTop: 1 }}
        onClick={handleButtonClick}
      >
        Сбросить все фильтры
      </Button>
    </>
  );
}
