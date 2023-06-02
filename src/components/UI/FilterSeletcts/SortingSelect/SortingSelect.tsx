import Select from "@mui/material/Select";
import useScreen from "../../../../hooks/useScreen";
import { useDispatch, useSelector } from "react-redux";
import { sorting } from "../../../../mockData/filters.ts";
import MenuItem from "@mui/material/MenuItem";
import { changePage } from "../../../../app/slices/pagination/paginationSlice";
import {
  setCurrentSortingMethod,
  filters,
} from "../../../../app/slices/sorting/sortingSlice";
import { selectStyle, typograpthyStyle } from "../FilterSelectsStyle";


export default function SortingSelect() {
  const dispatch = useDispatch();
  const { isMobile, isTablet } = useScreen();

  const isUserSignedIn = useSelector(
    (state) => state.authorization.isUserSignedIn
  );
  const sortingMethod = useSelector(
    (state) => state.sorting.currentSortingMethod
  );

  const sortingData =
    isUserSignedIn === "false" ? sorting.slice(0, 4) : sorting;

  function handleChange(event) {
    dispatch(changePage(1));
    dispatch(setCurrentSortingMethod(event.target.value));
    dispatch(filters(event.target.value));
  }

  return (
    <>
      {/* <Typography variant="subtitle1" component="h2" sx={typograpthyStyle}>
        Сортировать по:
      </Typography> */}

      <Select
        sx={[
          selectStyle
        ]}
        onChange={handleChange}
        value={sortingMethod}
        MenuProps={{PaperProps: {style: {
          backgroundColor: '#0f0811',
          color: '#ffffff'
        }}}}
      >
        {sortingData.map((method) => {
          return <MenuItem value={method.reducer}>{method.name}</MenuItem>;
        })}
      </Select>
    </>
  );
}
