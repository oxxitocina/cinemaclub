import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import useScreen from "../../hooks/useScreen";
import MainPageDescription from "./MainPageDescription/MainPageDescription";
import MainPageInfo from "./MainPageInfo/MainPageInfo";
import {
  mobilePageWrapper,
  mobileInfoWrapper,
  mainPageButton,
  mobileDescriptionWrapper,
} from "./MainPageStyle";
import DesktopMainPage from "./DesktopMainPage";
import SaveIcon from "../UI/SaveIcon/SaveIcon";
import BookmarkIcon from "../UI/LaterIcon/BookmarkIcon";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchMovieById } from "../../app/slices/movieDataApi/movieDataSlice";
import { Imovie } from "../../app/slices/movieDataApi/movieDataSlice";

export default function MainPage(props: { props: Imovie }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = props.props;
  const url = data?.backdrop?.url;
  const { isMobile, isTablet } = useScreen();

  function ResponsiveMainPage() {
    if (isTablet === true || isMobile === true) {
      return (
        <Box
          sx={[
            {
              backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 1)), url(${url})`,
            },
            mobilePageWrapper,
          ]}
        >
          <Box sx={mobileInfoWrapper}>
            <MainPageInfo data={data} />

            <Stack direction={"row"} spacing={2} sx={{ marginTop: 2 }}>
              <Button
                variant="contained"
                sx={mainPageButton}
                onClick={() => {
                  navigate(`/movie/${data.id}`, {
                    replace: true,
                    state: {
                      movieData: data,
                    },
                  });
                  dispatch(fetchMovieById(data.id));
                }}
              >
                Подробнее
              </Button>
              <Box>
                <SaveIcon id={data.id} />
              </Box>
              <Box>
                <BookmarkIcon id={data.id} />
              </Box>
            </Stack>

            <Box sx={mobileDescriptionWrapper}>
              <MainPageDescription description={data.shortDescription} />
            </Box>
          </Box>
        </Box>
      );
    }
    return <DesktopMainPage data={data} />;
  }

  return (
    <>
      <ResponsiveMainPage />
    </>
  );
}
