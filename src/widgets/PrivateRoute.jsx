import { Outlet, Navigate } from "react-router-dom";
import { Navbar } from "./layout";
import { protectedRoutes } from "@/routes";
import { useSelector } from "react-redux";

export default function PrivateRoute() {
  const { user } = useSelector((state) => state.user);
  return user ? (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={protectedRoutes} />
      </div>
      <Outlet />
    </>
  ) : (
    <Navigate to="/sign-in" replace />
  );
}
