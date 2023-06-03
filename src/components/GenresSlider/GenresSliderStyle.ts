const genreSliderWrapper = {
  marginTop: 2,
};

const genreItem = {
  color: "white",
  backgroundColor: "#1a171e",
  display: "flex",
  justifyContent: "center",
  flexWrap: "nowrap",
  padding: 0.7,
  borderRadius: "3%",
  textAlign: "center",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#782abb",
    padding: 0.5,
  },
};

const genreItemWrapper = {
  display: "flex",
  justifyContent: "space-between",
};

export { genreItemWrapper, genreItem, genreSliderWrapper };
