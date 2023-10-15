import {
  Routes,
  Route,
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import { Navbar } from "@/widgets/layout";
const isLogged = true;

// const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      {/* <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={routes} />
      </div> */}
      {/* <Routes> */}
      {/* {isLogged ? (
          <>
            {routes.map(
              ({ path, element }, key) =>
                element && (
                  <Route key={key} exact path={path} element={element} />
                )
            )}
            <Route
              path="/"
              loader={userLogin}
              element={<Navigate to="/home" replace />}
            />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/sign-in" replace />} />
        )}
      </Routes> */}
      {/* <RouterProvider router={router} /> */}
    </>
  );
}

export default App;
