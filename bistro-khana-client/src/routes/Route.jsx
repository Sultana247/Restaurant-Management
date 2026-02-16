import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Main from "../Layout/Main/Main";
import Home from "../Layout/Pages/Home/Home";
import Shop from "../Layout/Pages/ourshop/Shop";
import Menu from "../Layout/Pages/ourmenu/Menu";
import Contactus from "../Layout/Pages/contact/Contactus";
import Login from "../Layout/Pages/Authentication/Login";
import SignUp from "../Layout/Pages/Authentication/SignUp";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Cart from "../Layout/Pages/Cart/Cart";
import PrivateRoute from "./PrivateRoute";

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
          path: "/ourshop/:category",
          element: <Shop></Shop>
        },
        {
          path: "/ourmenu",
          element: <Menu></Menu>
        },
        {
          path: '/contactus',
          element: <Contactus></Contactus>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
       
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
       {
        path: "/dashboard/carts",
        element: <Cart></Cart>
      },
      {
        path: "/dashboard/userHome",
        element: <Cart></Cart>
      },
      {
        path: "/dashboard/carts",
        element: <Cart></Cart>
      },
      {
        path: "/dashboard/carts",
        element: <Cart></Cart>
      },
    ]
  }
]);

