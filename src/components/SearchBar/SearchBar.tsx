import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { setSearch } from "../../app/slices/search/searchingSlice";

export default function SearchBar() {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");

    function handleSubmit(event)    {
        event.preventDefault();
        dispatch(setSearch(searchQuery));     
    }
      
  return (
    <>
        <form onSubmit={handleSubmit}>
          <TextField
            id="search-bar"
            className="text"
            onInput={(event) => {
              setSearchQuery(event.target.value);
              dispatch(setSearch(event.target.value));
            }}
            label="Enter a city name"
            variant="outlined"
            placeholder="Search..."
            size="small"
          />
          <IconButton type="submit" aria-label="search">
            <SearchIcon style={{ fill: "blue" }} />
          </IconButton>
        </form>
    </>
  )
}
