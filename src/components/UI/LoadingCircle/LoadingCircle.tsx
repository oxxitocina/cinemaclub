import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { loadingStyle } from "./LoadingCircleStyle";

export default function LoadingCircle() {
  return (
    <>
      <Box sx={loadingStyle}>
        <CircularProgress />
      </Box>
    </>
  );
}
