import genres from "../../mockData/genres.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  genreItem,
  genreItemWrapper,
  genreSliderWrapper,
} from "./GenresSliderStyle";
import MovieCategoryNavigation from "../UI/MovieCategoryNavigation/MovieCategoryNavigation";
import { useAppDispatch, useAppSelector } from "../../app/store";
import {
  addGenre,
  removeGenre,
} from "../../app/slices/filtering/filteringSlice";
import { useNavigate } from "react-router-dom";

export default function GenresSlider() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const filterGenres = useAppSelector((state) => state.filtering.genres);

  function handleClick(genre: string) {
    if (filterGenres.includes(genre)) {
      dispatch(removeGenre(genre));
    } else {
      dispatch(addGenre(genre));
    }
    navigate("/movies");
  }

  return (
    <>
      <Box sx={genreSliderWrapper}>
        <MovieCategoryNavigation title={"Жанры"} />
        <Box sx={genreSliderWrapper}>
          <Swiper
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={2}
            spaceBetween={20}
            modules={[Autoplay]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 5,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
          >
            <Box sx={genreItemWrapper}>
              {genres.map((genre) => {
                return (
                  <SwiperSlide
                    key={genre.id}
                    onClick={() => {
                      handleClick(genre.name);
                    }}
                  >
                    <Box sx={genreItem}>
                      <Typography>
                        {genre.name.charAt(0).toUpperCase() +
                          genre.name.slice(1)}
                      </Typography>
                    </Box>
                  </SwiperSlide>
                );
              })}
            </Box>
          </Swiper>
        </Box>
      </Box>
    </>
  );
}
