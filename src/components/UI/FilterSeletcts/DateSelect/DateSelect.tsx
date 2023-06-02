import Select from "@mui/material/Select";
import useScreen from "../../../../hooks/useScreen";
import MenuItem from "@mui/material/MenuItem";
import { dates } from "../../../../mockData/filters.ts";
import { useDispatch, useSelector } from "react-redux";
import { changeDate } from "../../../../app/slices/sorting/sortingSlice";
import { changePage } from "../../../../app/slices/pagination/paginationSlice";
import { selectStyle, typograpthyStyle } from "../FilterSelectsStyle";

export default function DateSelect() {
  const dispatch = useDispatch();
  const { isMobile, isTablet } = useScreen();
  const dateSorting = useSelector((state) => state.sorting.dateSorting);

  function handleChange(event) {
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
            border: 'none'
          },
        ]}
        
        color="primary"
        value={dateSorting}
        onChange={handleChange}
        MenuProps={{PaperProps: {style: {
          backgroundColor: '#0f0811',
          color: '#ffffff',
          height: '200px'
        }}}}
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
