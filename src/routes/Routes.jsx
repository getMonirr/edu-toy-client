import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";
import Registration from "../pages/register/Registration";
import Error404 from "../pages/error/Error404";
import ToyDetails from "../pages/toyDetails/ToyDetails";
import PrivateRoute from "./private/PrivateRoute";
import AddToy from "../pages/addAToy/AddToy";

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
        path: "add-toy",
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },
      {
        path: "toys/:id",
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/toys/${params.id}`),
      },
    ],
  },
]);

export default Routes;
