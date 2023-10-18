import React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { userSignOut } from "@/redux/users/userThunk";
import { Toast } from "../Toast";
import { clearCredential } from "@/redux/users/userSlice";

export function Navbar({ routes }) {
  const [openNav, setOpenNav] = React.useState(false);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(userSignOut()).then((res) => {
      // const statusCode = res?.payload?.status;
      // const message = res?.payload?.data.message;
      // if (statusCode === 401) {
      //   dispatch(clearCredential());
      //   return Toast(message, "error");
      // } else {
      //   statusCode && Toast(message, "error");
      // }
    });
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path, icon, href, target }) => (
        <div key={name}>
          {path === "/sign-out" ? (
            <Typography
              key={name}
              as="li"
              variant="small"
              color="inherit"
              className="capitalize"
            >
              <Button
                variant="outlined"
                className=" flex items-center gap-1 p-1 font-normal"
                onClick={handleSignOut}
              >
                {icon &&
                  React.createElement(icon, {
                    className: "w-[18px] h-[18px] opacity-75 mr-1",
                  })}
                {name}
              </Button>
            </Typography>
          ) : (
            <Typography
              key={name}
              as="li"
              variant="small"
              color="inherit"
              className="capitalize"
            >
              <Link
                to={path}
                target={target}
                className="flex items-center gap-1 p-1 font-normal"
                onClick={() => setOpenNav(false)}
              >
                {icon &&
                  React.createElement(icon, {
                    className: "w-[18px] h-[18px] opacity-75 mr-1",
                  })}
                {name}
              </Link>
            </Typography>
          )}
        </div>
      ))}
    </ul>
  );

  return (
    <MTNavbar color="transparent" className="p-3">
      <div className="container mx-auto flex items-center justify-between text-white">
        <Link to={"/"}>
          <Typography className="ml-2 mr-4 cursor-pointer py-1.5 font-bold">
            {"sranuluge.dev"}
          </Typography>
        </Link>
        <div className="hidden lg:block">{navList}</div>

        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <MobileNav
        className="rounded-xl bg-white px-4 pb-4 pt-2 text-blue-gray-900"
        open={openNav}
      >
        <div className="container mx-auto">
          {navList}
          {/* {React.cloneElement(action, {
            className: "w-full block",
          })} */}
        </div>
      </MobileNav>
    </MTNavbar>
  );
}

Navbar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
