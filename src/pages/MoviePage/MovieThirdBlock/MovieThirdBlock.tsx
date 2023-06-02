import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SaveIcon from "../../../components/UI/SaveIcon/SaveIcon";
import BookmarkIcon from "../../../components/UI/LaterIcon/BookmarkIcon";
import { useDispatch } from "react-redux";
import { togglePlayer } from "../../../app/slices/toggleMoviePlayer/toggleMoviePlayerSlice";
import { blockStyle, buttonStyle } from "./MovieThirdBlockStyle";

export default function MovieThirdBlock({ id }) {
  const dispatch = useDispatch();

  return (
    <>
      <Box sx={blockStyle}>
        <Button
          variant="contained"
          onClick={() => {
            dispatch(togglePlayer());
          }}
          sx={buttonStyle}
        >
          Смотреть
        </Button>

        <SaveIcon id={id} />
        <BookmarkIcon id={id} />
      </Box>
    </>
  );
}
