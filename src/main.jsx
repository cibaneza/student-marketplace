import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/SignUp/Register";
import NotFound from "./pages/NotFound";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        // path: "/",
        index: true,
        element: <MainContent />,
        errorElement: <NotFound />,
      },
    ],
  },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
