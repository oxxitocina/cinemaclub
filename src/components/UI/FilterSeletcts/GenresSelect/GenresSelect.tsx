import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import genres from "../../../../mockData/genres.json";
import { useDispatch, useSelector } from "react-redux";
import {
  addGenre,
  removeGenre,
} from "../../../../app/slices/filtering/filteringSlice";
import { changePage } from "../../../../app/slices/pagination/paginationSlice";
import React, { useState } from "react";
import useScreen from "../../../../hooks/useScreen";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { selectStyle } from "../FilterSelectsStyle";

export default function GenresSelect() {
  const dispatch = useDispatch();
  const { isMobile, isTablet } = useScreen();
  const [currentGenre, setCurrentGenre] = React.useState<string[]>([]);
  const filterGenres = useSelector((state) => state.filtering.genres);

  function handleChange(event) {
    const value = event.target.value[0];
    dispatch(changePage(1));

    if (filterGenres.includes(value)) {
      dispatch(removeGenre(value));
    } else {
      dispatch(addGenre(value));
    }
  }

  return (
    <>
      <Typography variant="subtitle1" component="h2" sx={{ marginTop: 1 }}>
        Жанры
      </Typography>

      <Box
        sx={{
          ".MuiFormControl-root": {
            width: "100%",
          },
        }}
      >
        <FormControl
          sx={{
            m: 1,
            width: 300,
            margin: 0,
          }}
        >
          <Select
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            multiple
            onChange={handleChange}
            input={<OutlinedInput label="Жанры" />}
            value={currentGenre}
            sx={[
              selectStyle,
              {
                height: isTablet ? "4vw" : isMobile ? "5vw" : "3.5vh",
              },
            ]}
          >
            {genres.map((genre) => (
              <MenuItem key={genre.name} value={genre.name}>
                <Checkbox checked={filterGenres.includes(genre.name)} />
                <ListItemText primary={genre.name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
