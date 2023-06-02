import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { palette } from "./styles/themePalette";
import { ThemeProvider } from '@mui/material/styles';

function App() {
  const user = {
    login: "test",
    password: "test",
  };

  localStorage.setItem("user", JSON.stringify(user));

  return (
    <>
      <ThemeProvider theme={palette}>
        <Navbar />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
