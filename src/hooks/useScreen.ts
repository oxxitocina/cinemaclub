import { useEffect, useState } from "react";

export default function useScreen() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 576;
  const isTablet = width <= 800 && width > 576;

  return {
    isMobile: isMobile,
    isTablet: isTablet,
  };
}
