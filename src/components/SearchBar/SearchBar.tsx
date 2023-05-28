import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { setSearch } from "../../app/slices/search/searchingSlice";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import useScreen from "../../hooks/useScreen";
import {
  searchBarWrapper,
  searchFormWrapper,
  searchIconWrapper,
  searchTextFieldStyle,
} from "./SearchBarStyle";

export default function SearchBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isMobile, isTablet } = useScreen();
  const [searchQuery, setSearchQuery] = useState("");
  const height = {
    height: isMobile ? "6vh" : isTablet ? "5vw" : "4vh",
  };

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(setSearch(searchQuery));
    setSearchQuery("");
    navigate("/movies");
  }

  return (
    <>
      <Box
        sx={[
          {
            width: isMobile || isTablet ? "100vw" : "200px",
          },
          searchBarWrapper,
          height,
        ]}
      >
        <form onSubmit={handleSubmit}>
          <Box sx={searchFormWrapper}>
            <Box sx={[height, searchIconWrapper]}>
              <SearchIcon type="submit" />
            </Box>

            <TextField
              variant="standard"
              placeholder="search"
              onChange={(event) => {
                setSearchQuery(event.target.value);
              }}
              value={searchQuery}
              InputProps={{
                disableUnderline: true,
              }}
              sx={[
                {
                  ".MuiInputBase-root": height,
                },
                searchTextFieldStyle,
              ]}
            />
          </Box>
        </form>
      </Box>
    </>
  );
}
