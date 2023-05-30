const searchBarWrapper = {
  backgroundColor: "#1a171e",
  borderRadius: "3%",
  width: "100vw",
  "@media (min-width:1150px)": {
    height: "2vw",
    width: "200px",
  },
  "@media (max-width:1149px)": {
    height: "5vw",
  },
  "@media (max-width:576px)": {
    height: "6vh",
  },
};

const searchFormWrapper = {
  display: "flex",
  height: "100%",
  justifyContent: "space-between",
};

const searchIconWrapper = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "20%",
};

const searchTextFieldStyle = {
  width: "80%",
  border: "none",
  height: "100%",
  input: {
    color: "white",
    height: "100%",
  },
};

export {
  searchBarWrapper,
  searchFormWrapper,
  searchIconWrapper,
  searchTextFieldStyle,
};
