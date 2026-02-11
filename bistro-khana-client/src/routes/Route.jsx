import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Main from "../Layout/Main/Main";
import Home from "../Layout/Pages/Home/Home";
import Shop from "../Layout/Pages/ourshop/Shop";
import Menu from "../Layout/Pages/ourmenu/Menu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/ourshop",
          element: <Shop></Shop>
        },
        {
          path: "/ourmenu",
          element: <Menu></Menu>
        }
    ]
  },
]);

