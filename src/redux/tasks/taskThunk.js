import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createTaskAPI,
  getTaskListAPI,
  deleteTaskAPI,
} from "@/services/apiMethods";
import { Toast } from "@/widgets/Toast";
import HandleTokenExpire from "@/widgets/HandleTokenExpire";
const params = ["createdAt", "desc"];
export const createTask = createAsyncThunk(
  "users/create-task",
  async (req, { dispatch, rejectWithValue, getState }) => {
    try {
      const { user } = getState();

      await createTaskAPI(req, user.token);
      const { data } = await dispatch(getTaskList(params, user.token));
      Toast(data.message, "success");
      return {
        task: data.task,
      };
    } catch (error) {
      HandleTokenExpire(dispatch, error);
      return rejectWithValue(error?.response || error?.message);
    }
  }
);

export const getTaskList = createAsyncThunk(
  "users/get-tasks",
  async (params, { dispatch, rejectWithValue, getState }) => {
    try {
      const { user } = getState();
      const { data } = await getTaskListAPI(params, user.token);
      return {
        task: data.task,
      };
    } catch (error) {
      HandleTokenExpire(dispatch, error);
      return rejectWithValue(error?.response || error?.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "users/delete-tasks",
  async (id, { dispatch, rejectWithValue, getState }) => {
    try {
      const { user } = getState();
      const task = await deleteTaskAPI(id, user.token);
      const { data } = await dispatch(getTaskList(params, user.token));
      Toast(task.data.message, "success");
      return {
        task: data.task,
      };
    } catch (error) {
      HandleTokenExpire(dispatch, error);
      return rejectWithValue(error?.response || error?.message);
    }
  }
);
