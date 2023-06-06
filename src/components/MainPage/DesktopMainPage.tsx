import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MainPageInfo from "./MainPageInfo/MainPageInfo";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import MainPageDescription from "./MainPageDescription/MainPageDescription";
import {
  desktopInfoContainer,
  desktopInfoWrapper,
  desktopMainPageButton,
  desktopMainPageWrapper,
  desktopMovieDescriptionContainer,
  desktopMovieDescriptionWrapper,
} from "./DesktopMainPageStyle";
import SaveIcon from "../UI/SaveIcon/SaveIcon";
import BookmarkIcon from "../UI/LaterIcon/BookmarkIcon";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/store";
import { fetchMovieById } from "../../app/slices/movieDataApi/movieDataSlice";
import { Imovie } from "../../app/slices/movieDataApi/movieDataSlice";

export default function DesktopMainPage({ data }: { data: Imovie }) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const url = data?.backdrop?.url;
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

                  <Stack direction={"row"} spacing={1} sx={{ marginTop: 5 }}>
                    <Button
                      sx={desktopMainPageButton}
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
                    <MainPageDescription description={data?.shortDescription} />
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
