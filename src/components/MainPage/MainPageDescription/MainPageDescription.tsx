import Typography from "@mui/material/Typography";

export default function MainPageDescription({
  description,
}: {
  description: string | null;
}) {
  return (
    <>
      <Typography variant="h5" component="h4" sx={{ color: "#ffffff" }}>
        Описание
      </Typography>
      <Typography>{description}</Typography>
    </>
  );
}
