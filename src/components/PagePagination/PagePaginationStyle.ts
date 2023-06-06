const pagePaginationTheme = {
  palette: {
    primary: {
      main: "#782abb",
    },
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: "white",
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          button: {
            color: "white",
          },
          div: {
            color: "white",
          },
        },
      },
    },
  },
};

const pagePaginationWrapper = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  paddingBottom: 4,
};

export { pagePaginationTheme, pagePaginationWrapper };
