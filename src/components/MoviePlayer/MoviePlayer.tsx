import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { togglePlayer } from "../../app/slices/toggleMoviePlayer/toggleMoviePlayerSlice";
import { playerWrapper, playerButton } from "./MoviesPlayerStyle";

export default function MoviePlayer({ id }) {
  const dispatch = useDispatch();
  return (
    <>
      <Box sx={playerWrapper}>
        <Button
          sx={playerButton}
          onClick={() => {
            dispatch(togglePlayer());
          }}
        >
          X
        </Button>

        <div
          id="yohoho"
          data-kinopoisk={id}
          style={{
            width: "100%",
            height: "100%",
          }}
        ></div>

        <Helmet>
          <script src="//yohoho.cc/yo.js"></script>
        </Helmet>
      </Box>
    </>
  );
}
