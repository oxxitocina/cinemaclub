import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AuthorizationButton from "../UI/AuthorizationButton/AuthorizationButton";
import { useNavigate } from "react-router-dom";
import { buttonStyle } from "./BurgerMenuStyle";

export default function BurgerMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            navigate("/");
          }}
        >
          <Button sx={{ width: "100%" }}>Home</Button>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            navigate("/movies");
          }}
        >
          <Button sx={{ width: "100%" }}>Movies</Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <AuthorizationButton />
        </MenuItem>
      </Menu>
    </div>
  );
}
