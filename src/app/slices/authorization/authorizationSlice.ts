import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IinitialState {
  isUserSignedIn: string;
}

const initialState: IinitialState = {
  isUserSignedIn: localStorage.getItem("signedIn") ?? "false",
};

export const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    setAuthorization: (state, action: PayloadAction<string>) => {
      state.isUserSignedIn = action.payload;
      localStorage.setItem("signedIn", action.payload);
    },
  },
});

export default authorizationSlice.reducer;
export const { setAuthorization } = authorizationSlice.actions;
