import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  userSignInAPI,
  userSignOutAPI,
  userSignOutAllAPI,
  userSignUpAPI,
} from "@/services/apiMethods";
import { Toast } from "@/widgets/Toast";
import HandleTokenExpire from "@/widgets/HandleTokenExpire";

export const userSignIn = createAsyncThunk(
  "users/sign-in",
  async (req, { rejectWithValue, getState }) => {
    try {
      const { user } = getState();
      const { data } = await userSignInAPI(req, user.token);
      return {
        user: data.user,
        token: data.token,
      };
    } catch (error) {
      const message = error?.response?.data?.message || error?.message;
      Toast(message, "error");
      return rejectWithValue(error?.response?.data?.message || error);
    }
  }
);

export const userSignUp = createAsyncThunk(
  "users/sign-up",
  async (req, { rejectWithValue }) => {
    try {
      const { data } = await userSignUpAPI(req);
      return {
        user: data.user,
        token: data.token,
      };
    } catch (error) {
      const message = error?.response?.data?.message || error?.message;
      Toast(message, "error");
      return rejectWithValue(error.message);
    }
  }
);

export const userSignOut = createAsyncThunk(
  "users/sign-out",
  async (req, { dispatch, rejectWithValue, getState }) => {
    try {
      const { user } = getState();
      const { data } = await userSignOutAPI(user.token);
      Toast(data.message, "success");
      return {
        user: null,
        token: null,
      };
    } catch (error) {
      HandleTokenExpire(dispatch, error);
      return rejectWithValue(error?.response || error?.message);
    }
  }
);

export const userSignOutAll = createAsyncThunk(
  "users/sign-out-all",
  async (_, { dispatch, rejectWithValue, getState }) => {
    try {
      const { user } = getState();
      const { data } = await userSignOutAllAPI(user.token);
      Toast(data.message, "success");
      return {
        user: null,
        token: null,
      };
    } catch (error) {
      HandleTokenExpire(dispatch, error);
      return rejectWithValue(error?.response || error?.message);
    }
  }
);
