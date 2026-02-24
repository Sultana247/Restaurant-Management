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
import AddItems from "../Layout/Pages/Dashboard/Admin/AddItems";
import ManageItem from "../Layout/Pages/Dashboard/Admin/ManageItem";
import UpdateItem from "../Layout/Pages/Dashboard/Admin/UpdateItem";
import Payment from "../Layout/Pages/Dashboard/Client/Payments/Payment";
import PaymentSuccess from "../Layout/Pages/Dashboard/Client/Payments/PaymentSuccess";
import PaymentHistory from "../Layout/Pages/Dashboard/Client/Payments/PaymentHistory";
import AdminHome from "../Layout/Pages/Dashboard/Admin/AdminHome";
import UserHome from "../Layout/Pages/Dashboard/Client/user Home/UserHome";

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
        element: <UserHome></UserHome>
      },
      {
        path: "/dashboard/payment",
        element: <Payment></Payment>
      },
      {
        path: "/dashboard/paymentcomplete",
        element: <PaymentSuccess></PaymentSuccess>
      },
      {
        path: "/dashboard/paymentHistory",
        element: <PaymentHistory></PaymentHistory>
      },

      {
        path: "/dashboard/reservation",
        element: <h2>Reservation</h2>
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
        element: <PrivateAdminRoute><AdminHome></AdminHome></PrivateAdminRoute>
      },
      {
        path: "/dashboard/additems",
        element: <PrivateAdminRoute><AddItems></AddItems></PrivateAdminRoute>
      },
      {
        path: "/dashboard/updateitem/:id",
        element: <PrivateAdminRoute><UpdateItem></UpdateItem></PrivateAdminRoute>,
        loader: ({params})=> fetch(`https://bistro-khana-server.vercel.app/menu/${params.id}`)
      },
      {
        path: "/dashboard/manageitems",
        element: <PrivateAdminRoute><ManageItem></ManageItem></PrivateAdminRoute>
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

