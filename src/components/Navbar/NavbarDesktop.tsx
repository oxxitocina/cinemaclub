import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SearchBar from "../SearchBar/SearchBar";
import AuthorizationButton from "../UI/AuthorizationButton/AuthorizationButton";
import { useNavigate } from "react-router-dom";

export default function NavbarDesktop() {
  const navigate = useNavigate();

  return (
    <>
      <Typography variant="h6" component="div" sx={{ flexGrow: 15 }}>
        <Button
          color="inherit"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </Button>
        <Button
          color="inherit"
          onClick={() => {
            navigate("/movies");
          }}
        >
          Movies
        </Button>
      </Typography>
      <SearchBar />
      <AuthorizationButton />
    </>
  );
}
