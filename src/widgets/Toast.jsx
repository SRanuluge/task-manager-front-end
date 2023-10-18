import toast from "react-hot-toast";

export const Toast = (message, flag) => {
  if (flag == "error") toast.error(message);
  if (flag == "success") toast.success(message);
  if (flag == "loading") toast.loading(message);
  if (flag == "custom") toast.custom(message);
};
