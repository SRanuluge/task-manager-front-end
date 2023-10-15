import { Outlet, Navigate } from "react-router-dom";
import { Navbar } from "./layout";
import { protectedRoutes } from "@/routes";

export default function PrivateRoute() {
  //   const { currentUser } = useSelector((state) => state.user);
  const currentUser = true;
  return currentUser ? (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={protectedRoutes} />
      </div>
      <Outlet />
    </>
  ) : (
    <Navigate to="/sign-in" />
  );
}
