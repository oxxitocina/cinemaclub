import Select from "@mui/material/Select";
import { useAppDispatch, useAppSelector } from "../../../../app/store.tsx";
import { sorting } from "../../../../mockData/filters.ts";
import MenuItem from "@mui/material/MenuItem";
import { changePage } from "../../../../app/slices/pagination/paginationSlice";
import {
  setCurrentSortingMethod,
  filters,
} from "../../../../app/slices/sorting/sortingSlice";
import { selectStyle } from "../FilterSelectsStyle";

export default function SortingSelect() {
  const dispatch = useAppDispatch();
  const isUserSignedIn = useAppSelector(
    (state) => state.authorization.isUserSignedIn
  );
  const sortingMethod = useAppSelector(
    (state) => state.sorting.currentSortingMethod
  );
  const sortingData =
    isUserSignedIn === "false" ? sorting.slice(0, 4) : sorting;

  function handleChange(event: { target: { value: string } }) {
    dispatch(changePage(1));
    dispatch(setCurrentSortingMethod(event.target.value));
    dispatch(filters(event.target.value));
  }

  return (
    <>
      <Select
        sx={[selectStyle]}
        onChange={handleChange}
        value={sortingMethod}
        MenuProps={{
          PaperProps: {
            style: {
              backgroundColor: "#0f0811",
              color: "#ffffff",
            },
          },
        }}
      >
        {sortingData.map((method) => {
          return <MenuItem value={method.reducer}>{method.name}</MenuItem>;
        })}
      </Select>
    </>
  );
}
