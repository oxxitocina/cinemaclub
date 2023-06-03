import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthorization } from "../../../app/slices/authorization/authorizationSlice";
import { buttonStyle } from "./AuthorizationButtonStyle";

export default function AuthorizationButton() {
  const isUserSignedIn = useSelector(
    (state) => state.authorization.isUserSignedIn
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogoutClick() {
    dispatch(setAuthorization("false"));
  }

  function renderAuthorizationButton() {
    switch (isUserSignedIn) {
      case "true":
        return (
          <Button sx={buttonStyle} onClick={handleLogoutClick}>
            Logout
          </Button>
        );
      default:
        return (
          <Button
            color="primary"
            sx={buttonStyle}
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Button>
        );
    }
  }

  return <>{renderAuthorizationButton()}</>;
}
