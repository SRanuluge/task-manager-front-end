import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";

export const CustomDialog = ({
  children,
  open,
  handleOpen,
  handleConfirm,
  title,
}) => {
  return (
    <Dialog className="px-2" size={"md"} open={open} handler={handleOpen}>
      <DialogHeader>{title}</DialogHeader>
      <DialogBody>{children}</DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button variant="outlined" color="green" onClick={handleConfirm}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};
