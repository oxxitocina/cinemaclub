const searchBarWrapper = {
  backgroundColor: "#1a171e",
  borderRadius: "3%",
  width: "100vw",
  "@media (min-width:1150px)": {
    height: "35.5px",
    width: "200px",
  },
  "@media (max-width:1149px)": {
    width: "200px",
  },
  "@media (max-width:800px)": {
    height: "100%",
    width: "100%",
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
  backgroundColor: "#0f0811",
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
