import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthorization } from "../../../app/slices/authorization/authorizationSlice";

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
      case "false":
        return (
          <Button
            color="inherit"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Button>
        );
      case "true":
        return (
          <Button color="inherit" onClick={handleLogoutClick}>
            Logout
          </Button>
        );
    }
  }

  return <>{renderAuthorizationButton()}</>;
}
