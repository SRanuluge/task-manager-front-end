import { Typography, Button, Input } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { FeatureCard } from "@/widgets/cards";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  createTask,
  getTaskList,
  deleteTask,
  updateTask,
} from "@/redux/tasks/taskThunk";
import { useEffect } from "react";
import React from "react";

import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { CustomDialog } from "@/widgets/Dialog";
import { TaskEdit } from "@/widgets/form";

const params = ["createdAt", "desc"];

export function Home() {
  const { tasks } = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [updatedTask, setUpdatedTask] = useState("");
  const [open, setOpen] = useState(false);
  const [taskId, setTaskId] = useState("");
  const [status, setStatus] = useState(false);

  const handleCreateTask = () => {
    dispatch(createTask({ description: task, completed: false }));
  };

  const handleButtonClick = (id, flag) => {
    setTaskId(id);
    if (flag === "edit") {
      setOpen(true);
      setUpdatedTask(tasks.find((task) => task._id === id).description);
      setStatus(tasks.find((task) => task._id === id).completed);
      return console.log(flag, id);
    }
    if (flag === "delete") {
      return dispatch(deleteTask(id));
    }
  };
  const handleConfirm = () => {
    dispatch(
      updateTask({
        taskId,
        updatedData: { description: updatedTask, completed: status },
      })
    );
    return setOpen(false);
  };

  useEffect(() => {
    !tasks && dispatch(getTaskList(params.join(":")));
  }, []);

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pb-32 pt-16">
        <div className="absolute top-0 h-full w-full bg-[url('/background.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h2"
                color="white"
                className="mb-6 font-black"
              >
                Manage Your Tasks
              </Typography>
              <div className="mx-auto mt-12 max-w-3xl text-center">
                <div className="mb-8 flex gap-8">
                  <Input
                    color="green"
                    variant="standard"
                    size="lg"
                    label="Task Name"
                    name="task"
                    onChange={(e) => setTask(e.target.value)}
                  />
                </div>
                <Button
                  color="green"
                  variant="gradient"
                  size="lg"
                  className="mt-8"
                  onClick={handleCreateTask}
                >
                  Add Task
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
            {tasks &&
              tasks.map(
                ({ _id, description, completed, createdAt, updatedAt }) => (
                  <FeatureCard
                    key={createdAt}
                    title={description}
                    status={completed}
                    editIcon={React.createElement(PencilIcon, {
                      className: "w-4 h-4 ",
                    })}
                    deleteIcon={React.createElement(TrashIcon, {
                      className: "w-4 h-4 ",
                    })}
                    description={description}
                    handleButtonClick={handleButtonClick}
                    id={_id}
                  />
                )
              )}
          </div>
        </div>
      </section>
      <CustomDialog
        title={"Update Task"}
        open={open}
        handleOpen={() => setOpen(!open)}
        handleConfirm={handleConfirm}
      >
        <TaskEdit
          defaultName={updatedTask}
          defaultStatus={status}
          setName={(e) => setUpdatedTask(e)}
          setStatus={(e) => setStatus(e)}
        />
      </CustomDialog>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
