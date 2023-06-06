import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { palette } from "./styles/themePalette";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";

function App() {
  const user = {
    login: "test",
    password: "test",
  };

  localStorage.setItem("user", JSON.stringify(user));

  return (
    <>
      <ThemeProvider theme={palette}>
        <Box sx={{ backgroundColor: "secondary.main"}}>
          <Navbar />
          <Outlet />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
