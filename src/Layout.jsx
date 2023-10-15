import { Outlet } from "react-router-dom";
import { protectedRoutes } from "@/routes";
import { Navbar } from "./widgets/layout";

export default function Layout() {
  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={protectedRoutes} />
      </div>
      {/* <Outlet /> */}
    </>
  );
}
