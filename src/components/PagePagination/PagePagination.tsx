import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../../app/slices/pagination/paginationSlice";
import Pagination from "@mui/material/Pagination";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import {
  pagePaginationTheme,
  pagePaginationWrapper,
} from "./PagePaginationStyle";

export default function PagePagination() {
  const totalPages = useSelector((state) => state.pagination.totalPages);
  const currentPage = useSelector((state) => state.pagination.page);
  const dispatch = useDispatch();
  const theme = createTheme(pagePaginationTheme);

  function handleChange(event, value) {
    dispatch(changePage(value));
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={pagePaginationWrapper}>
          <Pagination
            count={totalPages}
            size="small"
            color="primary"
            onChange={handleChange}
            page={currentPage}
          />
        </Box>
      </ThemeProvider>
    </>
  );
}
