import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container, ThemeProvider, createTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import  SearchBar  from './SearchBar/SearchBar'

export default function ButtonAppBar() {
  const navigate = useNavigate();

  const theme = createTheme({
    components: {
      MuiAppBar: {
        styleOverrides: {},
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          flexGrow: 1,
          zIndex: 9,
          position: "fixed",
          display: "flex",
          alignItems: "center",
          width: "100vw",
        }}
      >
        <AppBar
          position="fixed"
          sx={{ backgroundColor: "#0d0d0f", borderBottom: "2px solid #1a171e" }}
        >
          <Container>
            <Toolbar>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                CINEMACLUB
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 15 }}>
                <Button color="inherit" onClick={() => {navigate('/')}}>Home</Button>
                <Button color="inherit" onClick={() => {navigate('/movies')}}>Movies</Button>
                <SearchBar/>
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
