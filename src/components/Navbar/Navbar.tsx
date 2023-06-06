import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";
import useScreen from "../../hooks/useScreen";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import SearchIcon from "@mui/icons-material/Search";
import NavbarDesktop from "./NavbarDesktop";
import { navbarWrapper, appbarStyle } from "./NavbarStyle";
import React from "react";

export default function ButtonAppBar() {
  const { isMobile, isTablet } = useScreen();
  const [activeSearch, setActiveSearch] = React.useState<boolean>(false);

  function MobileSearchInput() {
    if (activeSearch) {
      return (
        <>
          <Box sx={{ width: "100vw" }}>
            <SearchBar />
          </Box>
        </>
      );
    }
    return <></>;
  }

  function ResponsiveAppBar() {
    if (isTablet || isMobile === true) {
      return (
        <>
          <Box sx={{ gap: "10px", display: "flex" }}>
            <Button
              onClick={() => {
                setActiveSearch(!activeSearch);
              }}
            >
              <SearchIcon />
            </Button>

            <BurgerMenu />
          </Box>
        </>
      );
    }

    return <NavbarDesktop />;
  }

  return (
    <Box sx={navbarWrapper}>
      <AppBar position="fixed" sx={appbarStyle}>
        <Container>
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              CINEMACLUB
            </Typography>
            <ResponsiveAppBar />
          </Toolbar>
        </Container>
        <MobileSearchInput />
      </AppBar>
    </Box>
  );
}
