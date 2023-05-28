import { React } from "react";
import { useSwiper } from "swiper/react";
import styles from "./NavigationButtons.module.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";

export default function SlideNextButton({ small }) {
  const swiper = useSwiper();

  return (
    <>
      <div
        className={small === true ? styles.buttonNextSmall : styles.buttonNext}
        onClick={() => swiper.slideNext()}
      >
        <ArrowForwardIosIcon fontSize="medium" />
      </div>
    </>
  );
}
