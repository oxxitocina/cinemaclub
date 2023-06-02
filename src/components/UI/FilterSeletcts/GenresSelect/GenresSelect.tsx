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
import InputLabel from "@mui/material/InputLabel";

export default function GenresSelect() {
  const dispatch = useDispatch();
  const { isMobile, isTablet } = useScreen();
  const [currentGenre, setCurrentGenre] = React.useState<string[]>([]);
  const filterGenres = useSelector((state) => state.filtering.genres);

  const ITEM_HEIGHT = 70;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      backgroundColor: '#0f0811',
      color: '#ffffff',
    },
  },
  disableScrollLock: true
};

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
        <FormControl sx={{"@media (max-width:800px)": {
    width: "100%",
  },}}>
          <InputLabel id="demo-multiple-checkbox-label" sx={{color: 'white', position: 'absolute', top: '-25%', left: '10px'}}>Жанры</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            renderValue={(currentGenre) => currentGenre.join(', ')}
            onChange={handleChange}
            value={currentGenre}
            MenuProps={MenuProps}
            sx={[
              selectStyle,
            ]}
          >
            {genres.map((genre) => (
              <MenuItem key={genre.name} value={genre.name} >
                <Checkbox checked={filterGenres.includes(genre.name)} />
                <ListItemText primary={genre.name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        
    </>
  );
}
