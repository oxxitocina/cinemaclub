import CloseIconSVG from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import { iconStyle } from "./CloseIconStyle";
import { useDispatch } from "react-redux";
import { toggleFilter } from "../../../app/slices/toggleFilters/toggleFiltersSlice";

export default function CloseIcon() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(toggleFilter());
  }

  return (
    <>
      <Box sx={iconStyle} onClick={handleClick}>
        <CloseIconSVG />
      </Box>
    </>
  );
}
