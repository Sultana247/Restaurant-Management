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

import PrivateRoute from "./PrivateRoute";
import Cart from "../Layout/Pages/Dashboard/Client/Cart/Cart";
import Allusers from "../Layout/Pages/Dashboard/Admin/Allusers";
import PrivateAdminRoute from "./PrivateAdminRoute";

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
      // clients
       {
        path: "/dashboard/carts",
        element: <Cart></Cart>
      },
      {
        path: "/dashboard/userHome",
        element: <h2>User home</h2>
      },
      {
        path: "/dashboard/reservation",
        element: <h2>Reservation</h2>
      },
      {
        path: "/dashboard/payment",
        element: <h2>Payment</h2>
      },
      {
        path: "/dashboard/myBooking",
        element: <h2>my bookings</h2>
      },
      {
        path: "/dashboard/review",
        element: <h2>Review</h2>
      },
      // admin
      {
        path: "/dashboard/adminHome",
        element: <PrivateAdminRoute><h2>Admin Home</h2></PrivateAdminRoute>
      },
      {
        path: "/dashboard/additems",
        element: <PrivateAdminRoute><h2>Add new items</h2></PrivateAdminRoute>
      },
      {
        path: "/dashboard/manageitems",
        element: <PrivateAdminRoute><h2>Manage items</h2></PrivateAdminRoute>
      },
      {
        path: "/dashboard/manageBooking",
        element: <PrivateAdminRoute><h2>Manage Bookings</h2></PrivateAdminRoute>
      },
      {
        path: "/dashboard/allusers",
        element: <PrivateAdminRoute><Allusers></Allusers></PrivateAdminRoute>
      },
    ]
  }
]);

