import React from "react";
import ReactDOM from "react-dom/client";
import {
  createRoutesFromElements,
  RouterProvider,
  Route,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import "../public/css/tailwind.css";
import ErrorBoundary from "./widgets/ErrorBoundary";
import Layout from "@/layout";
import { routes, protectedRoutes } from "@/routes";
import PrivateRoute from "@/widgets/PrivateRoute";
import ErrorPage from "@/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {routes.map(
        ({ path, element }, key) =>
          element && (
            <Route
              errorElement={<ErrorPage />}
              key={key}
              path={path}
              element={element}
            />
          )
      )}
      <Route element={<PrivateRoute />}>
        {protectedRoutes.map(
          ({ path, element }, key) =>
            element && (
              <Route
                errorElement={<ErrorPage />}
                key={key}
                exact
                path={path}
                element={element}
              />
            )
        )}
        <Route path={"*"} element={<Navigate to="/home" />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
