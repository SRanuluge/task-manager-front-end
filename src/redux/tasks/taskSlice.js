import { createSlice } from "@reduxjs/toolkit";
import { createTask, getTaskList } from "./taskThunk";

const initialState = {
  tasks: null,
  taskLoading: false,
  taskError: false,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    clearTasks: (state, action) => {
      state.tasks = null;
      state.taskLoading = false;
      state.taskError = false;
    },
  },
  extraReducers: (builder) => {
    //Create a Task
    builder.addCase(createTask.pending, (state) => {
      state.taskLoading = true;
      state.taskError = false;
    });
    builder.addCase(createTask.fulfilled, (state, { payload }) => {
      state.tasks = payload.task;
      state.taskLoading = false;
      state.taskError = false;
    });
    builder.addCase(createTask.rejected, (state) => {
      state.taskLoading = false;
      state.taskError = true;
    });

    // fetch tasks
    builder.addCase(getTaskList.pending, (state) => {
      state.taskLoading = true;
      state.taskError = false;
    });
    builder.addCase(getTaskList.fulfilled, (state, { payload }) => {
      state.tasks = payload.task;
      state.taskLoading = false;
      state.taskError = false;
    });
    builder.addCase(getTaskList.rejected, (state) => {
      state.taskLoading = false;
      state.taskError = true;
    });
  },
});

const reducer = taskSlice.reducer;
export const { clearTasks } = taskSlice.actions;

export default reducer;
