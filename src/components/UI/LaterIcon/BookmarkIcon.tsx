import { useEffect } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIconFilled from "@mui/icons-material/Bookmark";
import { useAppDispatch, useAppSelector } from "../../../app/store";
import { useNavigate } from "react-router-dom";
import { iconStyle } from "./BookmarkIconStyle";
import Box from "@mui/material/Box";
import {
  addToSaved,
  removeFromSaved,
} from "../../../app/slices/addToLater/addToSavedSlice";

export default function BookmarkIcon({ id }: { id: number }) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isUserSignedIn = useAppSelector(
    (state) => state.authorization.isUserSignedIn
  );
  const savedMovies = useAppSelector((state) => state.addToSaved.savedMovies);

  useEffect(() => {
    localStorage.setItem("savedMovies", JSON.stringify(savedMovies || []));
  }, [savedMovies]);

  function handleClick(event: { stopPropagation: () => void }) {
    event.stopPropagation();
    navigate("/login");
  }

  function addMovie(event: { stopPropagation: () => void }) {
    event.stopPropagation();
    dispatch(addToSaved(id));
  }

  function removeMovie(event: { stopPropagation: () => void }) {
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
