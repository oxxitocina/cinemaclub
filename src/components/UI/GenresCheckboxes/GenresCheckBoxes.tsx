import FormGroup from "@mui/material/FormGroup";
import genres from "../../../mockData/genres.json";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import {
  addGenre,
  removeGenre,
} from "../../../app/slices/filtering/filteringSlice";
import { changePage } from "../../../app/slices/pagination/paginationSlice";

export default function GenresCheckBoxes() {
  const dispatch = useDispatch();
  const filterGenres = useSelector((state) => state.filtering.genres);

  function handleChangeGenre(event) {
    dispatch(changePage(1));
    if (filterGenres.includes(event.target.value)) {
      dispatch(removeGenre(event.target.value));
    } else {
      dispatch(addGenre(event.target.value));
    }
  }

  return (
    <FormGroup
      sx={{
        marginTop: 1,
      }}
      onChange={handleChangeGenre}
    >
      {genres.map((genre) => {
        return (
          <FormControlLabel
            control={<Checkbox sx={{ color: "white" }} />}
            color="primary"
            label={genre.name}
            sx={{
              height: "2.5vh",
            }}
            value={genre.name}
            checked={filterGenres.includes(genre.name)}
          />
        );
      })}
    </FormGroup>
  );
}
