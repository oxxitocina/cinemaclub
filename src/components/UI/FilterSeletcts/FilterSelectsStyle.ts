export const selectStyle = {
  minWidth: "120px",
  height: "100%",
  border: "none",
  color: "white",
  ".MuiSelect-icon": {
    color: "white",
  },
  "&:hover": {
    border: "1px solid #782abb",
  },
  "@media (max-width:800px)": {
    width: "100%",
  },
};

export const labelStyle = {
  color: "white",
  position: "absolute",
  top: "-25%",
  left: "10px",
  "@media (max-width:800px)": {
    top: 0,
  },
};
