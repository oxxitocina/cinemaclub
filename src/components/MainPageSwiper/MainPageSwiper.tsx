import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import MainPage from "../MainPage/MainPage";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import ArrowForward from '../UI/NavigationButtons/ArrowForward'
import ArrowBack from '../UI/NavigationButtons/ArrowBack'
import { dataMain } from "../../mock_data/mainPage";

export default function MainPageSwiper() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <ArrowBack />
        <ArrowForward />
        {dataMain.map((movie) => {
          return (
            <SwiperSlide>
              <MainPage props={movie} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
