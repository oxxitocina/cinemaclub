import { useEffect } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIconFilled from "@mui/icons-material/Bookmark";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { iconStyle } from "./BookmarkIconStyle";
import Box from "@mui/material/Box";
import {
  addToSaved,
  removeFromSaved,
} from "../../../app/slices/addToLater/addToSavedSlice";

export default function BookmarkIcon({ id }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isUserSignedIn = useSelector(
    (state) => state.authorization.isUserSignedIn
  );
  const savedMovies = useSelector((state) => state.addToSaved.savedMovies);

  useEffect(() => {
    localStorage.setItem("savedMovies", JSON.stringify(savedMovies) || []);
  }, [savedMovies]);

  function handleClick(event) {
    event.stopPropagation();
    navigate("/login");
  }

  function addMovie(event) {
    event.stopPropagation();
    dispatch(addToSaved(id));
  }

  function removeMovie(event) {
    event.stopPropagation();
    dispatch(removeFromSaved(id));
  }

  function RenderBookmarkButton() {
    if (isUserSignedIn === "false") {
      return (
        <Box onClick={handleClick} sx={iconStyle}>
          <BookmarkBorderIcon />
        </Box>
      );
    }
    if (savedMovies.includes(id)) {
      return (
        <Box onClick={removeMovie} sx={iconStyle}>
          <BookmarkIconFilled />
        </Box>
      );
    } else {
      return (
        <Box onClick={addMovie} sx={iconStyle}>
          <BookmarkBorderIcon />
        </Box>
      );
    }
  }

  return (
    <>
      <RenderBookmarkButton />
    </>
  );
}
