import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MainPage from "../MainPage/MainPage";
import { Autoplay, Pagination, Navigation } from "swiper";
import ArrowForward from "../UI/NavigationButtons/ArrowForward";
import ArrowBack from "../UI/NavigationButtons/ArrowBack";
import { dataMain } from "../../mockData/mainPage";
import useScreen from "../../hooks/useScreen";
import { Imovie } from "../../app/slices/movieDataApi/movieDataSlice";

export default function MainPageSwiper() {
  const { isMobile, isTablet } = useScreen();

  function ResponsiveNavigationButtons() {
    if (isMobile === false && isTablet === false) {
      return (
        <>
          <ArrowBack />
          <ArrowForward />
        </>
      );
    }
  }

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
        <ResponsiveNavigationButtons />
        {dataMain.map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <MainPage props={movie} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
