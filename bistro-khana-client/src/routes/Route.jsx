import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Main from "../Layout/Main/Main";
import Home from "../Layout/Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        }
    ]
  },
]);

