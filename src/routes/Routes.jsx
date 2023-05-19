import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";
import Registration from "../pages/register/Registration";
import Error404 from "../pages/error/Error404";
import ToyDetails from "../pages/toyDetails/ToyDetails";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "toys/:id",
        element: <ToyDetails />,
      },
    ],
  },
]);

export default Routes;
