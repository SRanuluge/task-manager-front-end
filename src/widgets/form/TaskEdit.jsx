import { Checkbox, Input, Typography } from "@material-tailwind/react";

export const TaskEdit = ({
  defaultName,
  defaultStatus,
  setName,
  setStatus,
}) => {
  return (
    <div className="mx-auto mt-12 max-w-3xl text-center">
      <div className="mb-8 flex gap-8">
        <Input
          color="green"
          variant="standard"
          size="lg"
          label="Task Title"
          name="task"
          value={defaultName}
          onChange={(e) => setName(e.target.value)}
        />
        {/* <Input
            color="green"
            variant="standard"
            size="lg"
            label="Task Name"
            name="task"
          /> */}
        <Input
          type="checkbox"
          name="status"
          onChange={(e) => console.log(e.target.checked)}
          value={defaultStatus}
          label={
            <Typography
              variant="small"
              color="green"
              className="flex items-center font-normal"
            >
              &nbsp;Status
            </Typography>
          }
          class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
          containerProps={{ className: "-ml-2.5" }}
        />
      </div>
    </div>
  );
};
