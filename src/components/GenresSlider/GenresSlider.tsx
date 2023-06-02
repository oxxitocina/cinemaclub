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

export default function GenresSlider() {
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
            slidesPerView="2"
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
                  <SwiperSlide>
                    <Box sx={genreItem}>
                      <Typography>{genre.name.charAt(0).toUpperCase() + genre.name.slice(1)}</Typography>
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
