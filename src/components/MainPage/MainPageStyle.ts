const mainPageStyle = {
  typography: {
    h1: {
      fontSize: "6rem",
      "@media (max-width:900px)": {
        fontSize: "4rem",
      },
      "@media (max-width:926px)": {
        fontSize: "2rem",
      },
    },
  },
};

const mobilePageWrapper = {
  maxWidth: "100%",
  width: "100vw",
  height: "90vh",
  color: "white",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
};

const mobileInfoWrapper = {
  width: "70%",
  paddingLeft: 2,
};

const mobileDescriptionWrapper = {
  width: "90vw",
  marginTop: 3,
};

const mainPageButton = {
  borderRadius: "3%",
};

export {
  mainPageStyle,
  mobilePageWrapper,
  mobileInfoWrapper,
  mainPageButton,
  mobileDescriptionWrapper,
};
