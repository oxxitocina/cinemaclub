const mainPage = {
  boxSizing: "border-box",
  maxWidth: "100%",
  width: "100vw",
  paddingTop: "6vh",
  backgroundSize: "cover",
  backgroundPosition: "center top",
};

const dataWrapper = {
  color: "white",
  display: "flex",
  height: "100vh",
  alignItems: "center",
};

const firstTitleWrapper = {
  display: "flex",
  gap: 2,
  marginTop: 2,
};

const descriptionWrapper = {
  width: "30vw",
  marginTop: 2,
  "@media (max-width:800px)": {
    width: '100%'
  },
  
};

export { mainPage, dataWrapper, firstTitleWrapper, descriptionWrapper };
