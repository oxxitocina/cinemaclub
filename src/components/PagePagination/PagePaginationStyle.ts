const pagePaginationTheme = {
  palette: {
    primary: {
      main: "#1976d2",
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
};

export { pagePaginationTheme, pagePaginationWrapper };
