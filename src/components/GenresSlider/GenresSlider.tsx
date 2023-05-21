import genres from "../../mock_data/genres.json";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ArrowForward from '../UI/NavigationButtons/ArrowForward'
import ArrowBack from '../UI/NavigationButtons/ArrowBack'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function GenresSlider() {
  return (
    <>
      <Box
        sx={{
          marginTop: 3,
        }}
      >
        <Box
          sx={{
            color: "white",
            borderLeft: '3px solid #1976d2',
            paddingLeft: '10px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer'
          }}
        >
          <Typography variant="h5">Жанры</Typography>
          <ArrowForwardIosIcon/>
        </Box>
        <Box
          sx={{
            marginTop: 2,
          }}
        >
          <Swiper
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}

            loop={true}
            slidesPerView={6}
            spaceBetween={30}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {genres.map((genre) => {
                return (
                  <SwiperSlide>
                    <Box
                      sx={{
                        color: "white",
                        backgroundColor: "#1a171e",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: 'nowrap',
                        padding: 0.7,
                        borderRadius: "3%",
                        textAlign: "center",
                        cursor: 'pointer',
                        "&:hover": {
                          border: '1px solid #1976d2',
                          padding: 1
                        }
                      }}
                    >
                      <Typography>{genre.name}</Typography>
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
