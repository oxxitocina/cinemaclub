import Typography from "@mui/material/Typography";
import SearchBar from "../SearchBar/SearchBar";
import AuthorizationButton from "../UI/AuthorizationButton/AuthorizationButton";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";


export default function NavbarDesktop() {
  const navigate = useNavigate();

  return (
    <>
      <Typography variant="h6" component="div" sx={{ flexGrow: 15 }}>
      <Box sx={{display: 'flex', gap: '30px'}}> 
        <Box
          color="primary"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </Box>
        <Box
          color="secondary"
          onClick={() => {
            navigate("/movies");
          }}
        >
          Movies
        </Box>
        </Box>
      </Typography>
      <Stack direction="row" spacing={1}>
        <SearchBar />
        <AuthorizationButton />
      </Stack>
    </>
  );
}
