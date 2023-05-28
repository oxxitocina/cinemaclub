import Select from "@mui/material/Select";
import useScreen from "../../../../hooks/useScreen";
import MenuItem from "@mui/material/MenuItem";
import { dates } from "../../../../mockData/filters";
import { useDispatch, useSelector } from "react-redux";
import { changeDate } from "../../../../app/slices/sorting/sortingSlice";
import { changePage } from "../../../../app/slices/pagination/paginationSlice";
import { selectStyle, typograpthyStyle } from "../FilterSelectsStyle";
import Typography from "@mui/material/Typography";

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
      <Typography variant="subtitle1" component="h2" sx={typograpthyStyle}>
        Год релиза:
      </Typography>

      <Select
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        sx={[
          selectStyle,
          {
            height: isTablet ? "4vw" : isMobile ? "5vw" : "3.5vh",
          },
        ]}
        color="primary"
        value={dateSorting}
        onChange={handleChange}
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
