import React from "react";
import styles from "./BookmarkIcon.module.scss";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIconFilled from "@mui/icons-material/Bookmark";
import { useDispatch, useSelector } from "react-redux";
import {
  addToSaved,
  removeFromSaved,
} from "../../../app/slices/addToLater/addToSavedSlice";
import { useNavigate } from "react-router-dom";

export default function BookmarkIcon({ id }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isUserSignedIn = useSelector(
    (state) => state.authorization.isUserSignedIn
  );
  const savedMovies = useSelector((state) => state.addToSaved.savedMovies);

  function checkAuthorization() {
    if (isUserSignedIn === "false") {
      return false;
    }
  }

  function handleClick(event) {
    event.stopPropagation();
    navigate("/login");
  }

  function renderBookmarkButton() {
    if (checkAuthorization() === false) {
      return (
        <div onClick={handleClick} className={styles.iconLater}>
          <BookmarkBorderIcon />
        </div>
      );
    }
    if (savedMovies.includes(id)) {
      return (
        <div onClick={removeMovie} className={styles.iconLater}>
          <BookmarkIconFilled />
        </div>
      );
    } else {
      return (
        <div onClick={addMovie} className={styles.iconLater}>
          <BookmarkBorderIcon />
        </div>
      );
    }
  }

  function addMovie(event) {
    event.stopPropagation();
    checkAuthorization();
    dispatch(addToSaved(id));
  }

  function removeMovie(event) {
    event.stopPropagation();
    checkAuthorization();
    dispatch(removeFromSaved(id));
  }

  return <>{renderBookmarkButton()}</>;
}
