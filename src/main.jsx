import React from "react";
import ReactDOM from "react-dom/client";

//css
import "./index.css";
import "react-tooltip/dist/react-tooltip.css";
import '@smastrom/react-rating/style.css'

//component
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes.jsx";
import AuthProvider from "./context/authProvider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Routes} />
    </AuthProvider>
  </React.StrictMode>
);
