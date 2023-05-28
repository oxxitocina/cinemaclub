const desktopMainPageWrapper = {
  maxWidth: "100%",
  width: "100vw",
  height: "90vh",
  color: "white",
  backgroundSize: "cover",
};

const desktopInfoWrapper = {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media (min-width: 780px)": {},
};

const desktopInfoContainer = {
  width: "70%",
  paddingLeft: 2,
};

const desktopMainPageButton = {
  borderRadius: "3%",
};

const desktopMovieDescriptionWrapper = {
  width: "100%",
  height: "100%",

  display: "flex",
  alignItems: "center",
};

const desktopMovieDescriptionContainer = {
  width: "100%",
  display: "flex",
  justifyContent: "end",
  paddingRight: 10,
};

export {
  desktopInfoWrapper,
  desktopMainPageButton,
  desktopMainPageWrapper,
  desktopInfoContainer,
  desktopMovieDescriptionWrapper,
  desktopMovieDescriptionContainer,
};
