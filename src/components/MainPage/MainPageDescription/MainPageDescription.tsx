import Typography from "@mui/material/Typography";

export default function MainPageDescription({ description }) {
  return (
    <>
      <Typography variant="h6" component="h4" sx={{ color: "#1976d2" }}>
        Описание
      </Typography>
      <Typography>{description}</Typography>
    </>
  );
}
