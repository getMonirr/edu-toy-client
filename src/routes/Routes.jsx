import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";
import Registration from "../pages/register/Registration";
import Error404 from "../pages/error/Error404";
import ToyDetails from "../pages/toyDetails/ToyDetails";
import PrivateRoute from "./private/PrivateRoute";
import AddToy from "../pages/addAToy/AddToy";
import AllToys from "../pages/allToys/AllToys";
import MyToys from "../pages/myToys/MyToys";
import UpdateToy from "../pages/myToys/UpdateToy";
import Blogs from "../pages/blogs/Blogs";

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
          fetch(`https://edu-toy-server.vercel.app/toys/${params.id}`),
      },
      {
        path: "/all-toys",
        element: <AllToys />,
        loader: () => fetch("https://edu-toy-server.vercel.app/toys"),
      },
      {
        path: "my-toys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "update-toys/:id",
        element: (
          <PrivateRoute>
            <UpdateToy />
          </PrivateRoute>
        ),
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
    ],
  },
]);

export default Routes;
