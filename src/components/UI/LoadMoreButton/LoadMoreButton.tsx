import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { nextPage } from "../../../app/slices/scrollingPagination/scrollingPaginationSlice";
import { buttonWrapper } from "./LoadMoreButtonStyle";

export default function LoadMoreButton() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(nextPage());
  }

  return (
    <>
      <Box sx={buttonWrapper}>
        <Button onClick={handleClick} variant="contained">
          ... Загрузить еще
        </Button>
      </Box>
    </>
  );
}
