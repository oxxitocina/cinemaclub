import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { ThemeProvider, createTheme } from "@mui/material";
import Button from "@mui/material/Button";
import useScreen from "../../hooks/useScreen";
import MainPageDescription from "./MainPageDescription/MainPageDescription";
import MainPageInfo from "./MainPageInfo/MainPageInfo";
import {
  mainPageStyle,
  mobilePageWrapper,
  mobileInfoWrapper,
  mainPageButton,
  mobileDescriptionWrapper,
} from "./MainPageStyle";
import DesktopMainPage from "./DesktopMainPage";
import SaveIcon from "../UI/SaveIcon/SaveIcon";
import BookmarkIcon from "../UI/LaterIcon/BookmarkIcon";

export default function MainPage(props) {
  const data = props.props;
  const url = data.backdrop.url;
  const theme = createTheme(mainPageStyle);
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
              <Button variant="contained" sx={mainPageButton}>
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
      <ThemeProvider theme={theme}>
        <ResponsiveMainPage />
      </ThemeProvider>
    </>
  );
}
