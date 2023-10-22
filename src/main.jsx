import React from "react";
import ReactDOM from "react-dom/client";
import {
  createRoutesFromElements,
  RouterProvider,
  Route,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import "../public/css/tailwind.css";
import ErrorBoundary from "./widgets/ErrorBoundary";
import PrivateRoute from "@/widgets/PrivateRoute";
import ErrorPage from "@/ErrorPage";
import NotFoundPage from "@/NotFoundPage";
import { Provider } from "react-redux";
import { Home, Profile, SignIn, SignUp } from "./pages";
import { persist, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route
        errorElement={<ErrorPage />}
        path={"/sign-in"}
        element={<SignIn />}
      />
      <Route
        errorElement={<ErrorPage />}
        path={"sign-up"}
        element={<SignUp />}
      />
      <Route path={"/"} element={<PrivateRoute />} errorElement={<ErrorPage />}>
        <Route exact index={true} path={"/"} element={<Home />} />
        <Route path={"/profile"} element={<Profile />} />
      </Route>
      <Route path={"*"} element={<NotFoundPage />} />
    </Route>
  ),
  { basename: import.meta.env.DEV ? "/" : "/task-manager-front-end/" }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persist}>
          <ThemeProvider>
            <RouterProvider router={router} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
