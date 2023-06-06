import { useSwiper } from "swiper/react";
import styles from "./NavigationButtons.module.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function SlideNextButton({ small }: { small: boolean }) {
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
