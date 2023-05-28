import { createSlice } from "@reduxjs/toolkit";

export const authorizationSlice = createSlice({
  name: "authorization",
  initialState: {
    isUserSignedIn:
      localStorage.getItem("signedIn") ??
      localStorage.setItem("signedIn", "false"),
  },
  reducers: {
    setAuthorization: (state, action) => {
      state.isUserSignedIn = action.payload;
      localStorage.setItem("signedIn", action.payload);
    },
  },
});

export const { setAuthorization } = authorizationSlice.actions;
export default authorizationSlice.reducer;
