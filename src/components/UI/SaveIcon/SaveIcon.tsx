import Box from "@mui/material/Box";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { iconStyle } from "./SaveIconStyle";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../../app/slices/addToFavourites/addToFavouritesSlice";

export default function SaveIcon({ id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isUserSignedIn = useSelector(
    (state) => state.authorization.isUserSignedIn
  );
  const favouriteMovies = useSelector(
    (state) => state.addToFavourites.favouriteMovies
  );

  useEffect(() => {
    localStorage.setItem(
      "favouriteMovies",
      JSON.stringify(favouriteMovies) || []
    );
  }, [favouriteMovies]);

  function handleClick(event) {
    event.stopPropagation();
    navigate("/login");
  }

  function addMovie(event) {
    event.stopPropagation();
    dispatch(addToFavourites(id));
  }

  function removeMovie(event) {
    event.stopPropagation();
    dispatch(removeFromFavourites(id));
  }

  function renderSaveButton() {
    if (isUserSignedIn === "false") {
      return (
        <Box onClick={handleClick} sx={iconStyle}>
          <FavoriteBorderIcon />
        </Box>
      );
    }
    if (favouriteMovies.includes(id)) {
      return (
        <Box onClick={removeMovie} sx={iconStyle}>
          <FavoriteIcon />
        </Box>
      );
    } else {
      return (
        <Box onClick={addMovie} sx={iconStyle}>
          <FavoriteBorderIcon />
        </Box>
      );
    }
  }

  return <>{renderSaveButton()}</>;
}
