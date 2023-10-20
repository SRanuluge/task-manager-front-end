import { Toast } from "./Toast";
import { clearCredential } from "@/redux/users/userSlice";

export default function HandleTokenExpire(dispatch, data) {
  const statusCode = data?.response?.status || null;
  const message = data?.response?.data?.message || data?.message;

  if (statusCode === 401) {
    dispatch(clearCredential());
    Toast(message, "error");
  } else {
    message && Toast(message, "error");
  }
}
