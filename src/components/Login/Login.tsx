import Box from "@mui/material/Box";
import { SetStateAction, useState } from "react";
import { setAuthorization } from "../../app/slices/authorization/authorizationSlice";
import { useAppDispatch } from "../../app/store";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";
import {
  loginWrapper,
  loginFormWrapper,
  inputWrapper,
  textFieldStyle,
} from "./LoginStyle";
import React from "react";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  function handleUsernameChange(event: { target: { value: SetStateAction<string>; }; }) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event: { target: { value: SetStateAction<string>; }; }) {
    setPassword(event.target.value);
  }

  function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    const user: {login: string, password: string} = JSON.parse(localStorage.getItem("user") || '');
    if (username == user.login && password == user.password) {
      dispatch(setAuthorization("true"));
      navigate("/");
    } else {
      alert("incorrect username or password");
    }
  }

  return (
    <>
      <Box sx={loginWrapper}>
        <Box sx={loginFormWrapper}>
          <form onSubmit={handleSubmit}>
            <Typography variant="h5">Login</Typography>

            <Box sx={inputWrapper}>
              <Typography>Username</Typography>
              <TextField
                variant="standard"
                required
                sx={textFieldStyle}
                onChange={handleUsernameChange}
                value={username}
              ></TextField>
            </Box>

            <Box sx={inputWrapper}>
              <Typography>Password</Typography>
              <TextField
                variant="standard"
                required
                sx={textFieldStyle}
                onChange={handlePasswordChange}
                value={password}
              ></TextField>
            </Box>

            <Button type="submit" variant="contained" sx={textFieldStyle}>
              Login
            </Button>

            <Box sx={inputWrapper}>
              <Typography variant="body2">
                username: test
                <br />
                password: test
              </Typography>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
}
