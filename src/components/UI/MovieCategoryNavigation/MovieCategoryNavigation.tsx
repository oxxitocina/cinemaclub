import Typography from "@mui/material/Typography";
import { navigationStyle } from "./MovieCategoryNavigationStyle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";

export default function MovieCategoryNavigation({ title }: { title: string }) {
  return (
    <>
      <Box sx={navigationStyle}>
        <Typography variant="h5">{title}</Typography>
        <ArrowForwardIosIcon />
      </Box>
    </>
  );
}
