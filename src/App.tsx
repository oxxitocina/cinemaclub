import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  const user = {
    login: "test",
    password: "test",
  };

  localStorage.setItem("user", JSON.stringify(user));

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
