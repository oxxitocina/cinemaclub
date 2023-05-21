import Box from "@mui/material/Box";
import poster from "../mock_data/wonderwoman.jpg";
import React from "react";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

export default function MainPage(props) {
  const data = props.props;
  const url = `/images/${data.url}`;

  return (
    <>
      <Box
        sx={{
          maxWidth: "100%",
          width: "100vw",
          height: "90vh",
          color: "white",
          backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 1)), url(${url})`,
          backgroundSize: "cover",
        }}
      >
        <Container sx={{ height: "100%" }}>
          <Stack direction={"row"} spacing={0} sx={{ height: "100%" }}>
            <Box
              sx={{
                width: "50%",
                height: "100%",

                display: "flex",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography variant="h1" component="h2">
                  {data.name}
                </Typography>
                <Box>
                  <Stack direction={"row"} spacing={1}>
                    <StarIcon />
                    <Typography>{data.raiting}</Typography>
                    <Typography>{data.year}</Typography>
                    <Typography>2ч 22мин</Typography>
                  </Stack>
                </Box>
                <Box>
                  <Stack direction={"row"} spacing={1}>
                    <Typography>{data.country}</Typography>
                    <Typography>Военный,боевик,фэнтези</Typography>
                    <Typography>{data.age}</Typography>
                  </Stack>
                </Box>
                <Box
                  sx={{
                    marginTop: 5,
                  }}
                >
                  <Stack direction={"row"} spacing={2}>
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: "3%",
                      }}
                    >
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
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "100%",

                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  marginTop: "20vh",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Box
                  sx={{
                    width: "60%",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h4"
                    sx={{ color: "#1976d2" }}
                  >
                    Описание
                  </Typography>
                  <Typography>
                    Перед тем как стать Чудо-женщиной, она была Дианой —
                    принцессой амазонок, обученной быть непобедимой
                    воительницей. Rогда на берегах eё острова терпит крушение
                    американский пилот, Диана покидает дом, чтобы противостоять
                    злу.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
