import FormGroup from "@mui/material/FormGroup";
import genres from "../../../mockData/genres.json";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useAppDispatch, useAppSelector } from "../../../app/store";
import {
  addGenre,
  removeGenre,
} from "../../../app/slices/filtering/filteringSlice";
import { changePage } from "../../../app/slices/pagination/paginationSlice";

export default function GenresCheckBoxes() {
  const dispatch = useAppDispatch();
  const filterGenres = useAppSelector((state) => state.filtering.genres);

  function handleChangeGenre(event: React.ChangeEvent<HTMLInputElement>) {
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
              height: "1.5vw",
            }}
            value={genre.name}
            checked={filterGenres.includes(genre.name)}
          />
        );
      })}
    </FormGroup>
  );
}
