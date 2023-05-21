import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowForward from '../UI/NavigationButtons/ArrowForward'
import ArrowBack from '../UI/NavigationButtons/ArrowBack'
import { data } from "../../mock_data/movies";
import MovieCard from "../MovieCard";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Navigation, Autoplay } from "swiper";
import "swiper/css/pagination";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MovieCardFull from "../MovieCardFull/MovieCardFull";

// Import Swiper styles
import "swiper/css";
import { Box, Typography } from "@mui/material";

export default function MoviesSlider() {
  const movies = data.slice(0, 25);

  return (
    <>
      <Box
        sx={{
          color: "white",
          marginTop: 1,
        }}
      >
        <Box sx={{
          borderLeft: '3px solid #1976d2',
          paddingLeft: '10px',
          display: 'flex',
          alignItems: 'center'
        }}>
            <Typography variant="h5">Фильмы с высоким рейтингом</Typography>
            <ArrowForwardIosIcon/>
        </Box>
        <Box
          sx={{
            marginTop: 2,
          }}
        >
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={5}
            loop={true}
            spaceBetween={30}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            <ArrowBack small={true}/>
            <ArrowForward small={true}/>
            {movies.map((movie) => {
              return (
                <SwiperSlide>
                  {/* <MovieCard data={movie} /> */}
                  <MovieCardFull data={movie}/>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </Box>
    </>
  );
}
