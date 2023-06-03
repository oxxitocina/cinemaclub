import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthorization } from "../../../app/slices/authorization/authorizationSlice";
import { buttonStyle } from "./AuthorizationButtonStyle";

export default function AuthorizationButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isUserSignedIn = useSelector(
    (state) => state.authorization.isUserSignedIn
  );

  function handleLogoutClick() {
    dispatch(setAuthorization("false"));
  }

  function RenderAuthorizationButton() {
    switch (isUserSignedIn) {
      case "true":
        return (
          <Button sx={buttonStyle} onClick={handleLogoutClick}>
            Выйти
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
            Вход
          </Button>
        );
    }
  }

  return (
    <>
      <RenderAuthorizationButton />
    </>
  );
}
