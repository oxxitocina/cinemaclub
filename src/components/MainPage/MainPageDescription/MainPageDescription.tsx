import Typography from "@mui/material/Typography";

export default function MainPageDescription({ description }) {
  return (
    <>
      <Typography variant="h6" component="h4" sx={{ color: "#782abb" }}>
        Описание
      </Typography>
      <Typography>{description}</Typography>
    </>
  );
}
