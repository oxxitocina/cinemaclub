const paperStyle = {
  backgroundColor: "#1a171e",
  color: "white",
  border: "90%",
  cursor: "pointer",
  "&:hover": {
    border: "1px solid #1976d2",
    padding: 1,
  },
};

const movieTitleWrapper = {
  padding: 0.5,
  paddingLeft: 1,
  display: "flex",
  justifyContent: "space-between",
};

const movieInfoWrapper = {
  padding: 0.5,
  paddingLeft: 1,
  width: "80%",
};

const iconsWrapper = {
  display: "flex",
  gap: "3px",
};

const ratingWrapper = {
  padding: 0.5,
  paddingLeft: 1,
};

export {
  paperStyle,
  movieInfoWrapper,
  movieTitleWrapper,
  iconsWrapper,
  ratingWrapper,
};
