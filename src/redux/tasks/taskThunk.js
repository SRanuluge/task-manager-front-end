import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createTaskAPI,
  getTaskListAPI,
  deleteTaskAPI,
  updateTaskAPI,
} from "@/services/apiMethods";
import { Toast } from "@/widgets/Toast";
import HandleTokenExpire from "@/widgets/HandleTokenExpire";
const params = ["createdAt", "desc"];
export const createTask = createAsyncThunk(
  "task/create-task",
  async (req, { dispatch, rejectWithValue, getState }) => {
    try {
      const { user } = getState();

      const response = await createTaskAPI(req, user.token);
      await dispatch(getTaskList(params, user.token));
      Toast(response.data.message, "success");
      return {
        task: null,
      };
    } catch (error) {
      HandleTokenExpire(dispatch, error);
      return rejectWithValue(error?.response || error?.message);
    }
  }
);

export const getTaskList = createAsyncThunk(
  "task/get-tasks",
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
  "task/delete-tasks",
  async (id, { dispatch, rejectWithValue, getState }) => {
    try {
      const { user } = getState();
      const task = await deleteTaskAPI(id, user.token);
      await dispatch(getTaskList(params, user.token));
      Toast(task.data.message, "success");
      return {
        task: null,
      };
    } catch (error) {
      HandleTokenExpire(dispatch, error);
      return rejectWithValue(error?.response || error?.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  "task/update-tasks",
  async ({ taskId, updatedData }, { dispatch, rejectWithValue, getState }) => {
    try {
      const { user } = getState();
      const task = await updateTaskAPI({
        taskId,
        updatedData,
        token: user.token,
      });
      await dispatch(getTaskList(params, user.token));
      Toast(task.data.message, "success");
      return {
        task: null,
      };
    } catch (error) {
      HandleTokenExpire(dispatch, error);
      return rejectWithValue(error?.response || error?.message);
    }
  }
);
