import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { dates } from "../../../../mockData/filters.ts";
import { useAppDispatch, useAppSelector } from "../../../../app/store.tsx";
import { changeDate } from "../../../../app/slices/sorting/sortingSlice";
import { changePage } from "../../../../app/slices/pagination/paginationSlice";
import { selectStyle } from "../FilterSelectsStyle";

export default function DateSelect() {
  const dispatch = useAppDispatch();
  const dateSorting = useAppSelector((state) => state.sorting.dateSorting);

  function handleChange(event: { target: { value: string } }) {
    dispatch(changePage(1));
    dispatch(changeDate(event.target.value));
  }

  return (
    <>
      <Select
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        sx={[
          selectStyle,
          {
            border: "none",
          },
        ]}
        color="primary"
        value={dateSorting}
        onChange={handleChange}
        MenuProps={{
          PaperProps: {
            style: {
              backgroundColor: "#0f0811",
              color: "#ffffff",
              height: "200px",
            },
          },
        }}
      >
        <MenuItem value="all">
          <em>Все</em>
        </MenuItem>
        {dates.map((date) => {
          return <MenuItem value={date}>{date}</MenuItem>;
        })}
      </Select>
    </>
  );
}
