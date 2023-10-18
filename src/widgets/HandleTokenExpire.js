import { Toast } from "./Toast";
import { clearCredential } from "@/redux/users/userSlice";

export default function HandleTokenExpire(dispatch, data) {
  const statusCode = data?.status;
  const message = data?.data?.message;
  if (statusCode === 401) {
    dispatch(clearCredential());
    Toast(message, "error");
  } else {
    statusCode && Toast(message, "error");
  }
}
