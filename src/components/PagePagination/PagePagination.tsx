import { useAppDispatch, useAppSelector } from "../../app/store";
import { changePage } from "../../app/slices/pagination/paginationSlice";
import Pagination from "@mui/material/Pagination";
import { Box } from "@mui/material";
import { pagePaginationWrapper } from "./PagePaginationStyle";
import useScreen from "../../hooks/useScreen";

export default function PagePagination() {
  const totalPages = useAppSelector((state) => state.pagination.totalPages);
  const currentPage = useAppSelector((state) => state.pagination.page);
  const { isMobile } = useScreen();
  const dispatch = useAppDispatch();

  function handleChange(event: React.ChangeEvent<unknown>, value: number) {
    dispatch(changePage(value));
  }

  return (
    <>
      <Box sx={pagePaginationWrapper}>
        <Pagination
          count={totalPages}
          size={isMobile === true ? "small" : "medium"}
          color="primary"
          onChange={handleChange}
          page={currentPage}
        />
      </Box>
    </>
  );
}
