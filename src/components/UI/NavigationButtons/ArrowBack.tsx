import { React } from "react";
import { useSwiper } from "swiper/react";
import styles from "./NavigationButtons.module.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Box from "@mui/material/Box";

export default function SlideNextButton({ small }) {
  const swiper = useSwiper();

  return (
    <>
      <div
        className={small === true ? styles.buttonPrevSmall : styles.buttonPrev}
        onClick={() => swiper.slidePrev()}
      >
        <ArrowBackIosNewIcon fontSize="medium" />
      </div>
    </>
  );
}
