import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MainPageInfo from "./MainPageInfo/MainPageInfo";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MainPageDescription from "./MainPageDescription/MainPageDescription";
import {
  desktopInfoContainer,
  desktopInfoWrapper,
  desktopMainPageButton,
  desktopMainPageWrapper,
  desktopMovieDescriptionContainer,
  desktopMovieDescriptionWrapper,
} from "./DesktopMainPageStyle";

export default function DesktopMainPage({ data }) {
  const url = `/images/${data.url}`;
  return (
    <>
      <Box
        sx={[
          {
            backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 1)), url(${url})`,
          },
          desktopMainPageWrapper,
        ]}
      >
        <Container sx={{ height: "100%" }}>
          <Grid container spacing={0} sx={{ height: "100%" }}>
            <Grid item xs={6}>
              <Box sx={desktopInfoWrapper}>
                <Box sx={desktopInfoContainer}>
                  <MainPageInfo data={data} />

                  <Stack direction={"row"} spacing={2} sx={{ marginTop: 5 }}>
                    <Button variant="contained" sx={desktopMainPageButton}>
                      Подробнее
                    </Button>
                    <Box>
                      <FavoriteBorderIcon />
                    </Box>
                    <Box>
                      <BookmarkBorderIcon />
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box sx={desktopMovieDescriptionWrapper}>
                <Box sx={desktopMovieDescriptionContainer}>
                  <Box
                    sx={{
                      width: "60%",
                    }}
                  >
                    <MainPageDescription />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
