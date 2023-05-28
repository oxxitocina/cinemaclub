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
import { useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import { navbarWrapper, appbarStyle } from "./NavbarStyle";

export default function ButtonAppBar() {
  const { isMobile, isTablet } = useScreen();
  const [activeSearch, setActiveSearch] = useState(false);

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
  }

  function ResponsiveAppBar() {
    if (isTablet === true || isMobile === true) {
      return (
        <>
          <Button
            onClick={() => {
              setActiveSearch(!activeSearch);
            }}
          >
            <SearchIcon />
          </Button>

          <BurgerMenu />
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
