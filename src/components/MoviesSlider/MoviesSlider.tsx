import { Swiper, SwiperSlide } from "swiper/react";
import ArrowForward from "../UI/NavigationButtons/ArrowForward";
import ArrowBack from "../UI/NavigationButtons/ArrowBack";
import { data } from "../../mockData/allMovies";
import { Navigation, Autoplay } from "swiper";
import "swiper/css/pagination";
import MovieCardFull from "../MovieCardFull/MovieCardFull";
import MovieCategoryNavigation from "../UI/MovieCategoryNavigation/MovieCategoryNavigation";
import "swiper/css";
import { Box } from "@mui/material";
import { movieSliderStyle } from "./MovieSliderStyle";

export default function MoviesSlider() {
  const movies = data.slice(0, 25);

  return (
    <>
      <Box sx={movieSliderStyle}>
        <MovieCategoryNavigation title={"Популярные фильмы"} />
        <Box sx={movieSliderStyle}>
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={2}
            loop={true}
            spaceBetween={50}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
          >
            <ArrowBack small={true} />
            <ArrowForward small={true} />

            {movies.map((movie) => {
              return (
                <SwiperSlide>
                  <MovieCardFull data={movie} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </Box>
    </>
  );
}
