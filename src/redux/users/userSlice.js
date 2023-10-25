import { createSlice } from "@reduxjs/toolkit";
import {
  userSignIn,
  userSignOut,
  userSignOutAll,
  userSignUp,
} from "./userThunk";

const initialState = {
  token: null,
  user: null,
  userLoading: false,
  userError: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearCredential: (state, action) => {
      state.token = null;
      state.user = null;
      state.userLoading = false;
      state.userError = false;
    },
  },
  extraReducers: (builder) => {
    //user sign in
    builder.addCase(userSignIn.pending, (state) => {
      state.userLoading = true;
      state.userError = false;
    });
    builder.addCase(userSignIn.fulfilled, (state, { payload }) => {
      console.log("reducer", payload);
      state.user = payload.user;
      state.token = payload.token;
      state.userLoading = false;
      state.userError = false;
    });
    builder.addCase(userSignIn.rejected, (state) => {
      state.userLoading = false;
      state.userError = true;
    });

    //user sign up
    builder.addCase(userSignUp.pending, (state) => {
      state.userLoading = true;
      state.userError = false;
    });
    builder.addCase(userSignUp.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.userLoading = false;
      state.userError = false;
    });
    builder.addCase(userSignUp.rejected, (state) => {
      state.userLoading = false;
      state.userError = true;
    });

    //user logout
    builder.addCase(userSignOut.pending, (state) => {
      state.userLoading = true;
      state.userError = false;
    });
    builder.addCase(userSignOut.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.userLoading = false;
      state.userError = false;
    });
    builder.addCase(userSignOut.rejected, (state) => {
      state.userLoading = false;
      state.userError = true;
    });

    //user logout all devices
    builder.addCase(userSignOutAll.pending, (state) => {
      state.userLoading = true;
      state.userError = false;
    });
    builder.addCase(userSignOutAll.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.userLoading = false;
      state.userError = false;
    });
    builder.addCase(userSignOutAll.rejected, (state) => {
      state.userLoading = false;
      state.userError = true;
    });
  },
});

const reducer = userSlice.reducer;
export const { clearCredential } = userSlice.actions;

export default reducer;
