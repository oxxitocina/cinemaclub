import { React, useEffect } from "react";
import styles from "./SaveIcon.module.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../../app/slices/addToFavourites/addToFavouritesSlice";
import { useNavigate } from "react-router-dom";

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

  function checkAuthorization() {
    if (isUserSignedIn === "false") {
      return false;
    }
  }

  function handleClick(event) {
    event.stopPropagation();
    navigate("/login");
  }

  function renderSaveButton() {
    if (checkAuthorization() === false) {
      return (
        <div onClick={handleClick} className={styles.iconSave}>
          <FavoriteBorderIcon />
        </div>
      );
    }
    if (favouriteMovies.includes(id)) {
      return (
        <div onClick={removeMovie} className={styles.iconSave}>
          <FavoriteIcon />
        </div>
      );
    } else {
      return (
        <div onClick={addMovie} className={styles.iconSave}>
          <FavoriteBorderIcon />
        </div>
      );
    }
  }

  function addMovie(event) {
    event.stopPropagation();
    checkAuthorization();
    dispatch(addToFavourites(id));
  }

  function removeMovie(event) {
    event.stopPropagation();
    checkAuthorization();
    dispatch(removeFromFavourites(id));
  }

  return <>{renderSaveButton()}</>;
}
