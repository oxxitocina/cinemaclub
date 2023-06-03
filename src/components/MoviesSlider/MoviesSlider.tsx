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
import useScreen from "../../hooks/useScreen";

export default function MoviesSlider() {
  const movies = data.slice(0, 25);
  const { isMobile } = useScreen();

  function ResponsiveArrows() {
    if (isMobile === false) {
      return (
        <>
          <ArrowBack small={true} />
          <ArrowForward small={true} />
        </>
      )
    }
  }

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
            <ResponsiveArrows/>

            {movies.map((movie) => {
              return (
                <SwiperSlide key={movie.id}>
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
