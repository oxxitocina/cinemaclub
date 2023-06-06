import { useSwiper } from "swiper/react";
import styles from "./NavigationButtons.module.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function SlideNextButton({ small }: { small: boolean }) {
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
