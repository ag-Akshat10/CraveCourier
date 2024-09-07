

import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Signup from "@/auth/Signup.tsx";
// @ts-ignore
import Login from "@/auth/Login.tsx";
import ForgotPassword from "@/auth/ForgotPassword.tsx";
import ResetPassword from "@/auth/ResetPassword.tsx";

import HereSection from "@/components/HereSection.tsx";
import MainLayout from "@/layout/MainLayout.tsx";
import Profile from "@/components/Profile.tsx";
import SearchPage from "@/components/SearchPage.tsx";
import RestaurantDetail from "@/components/ReastaurantDetail.tsx";
import Cart from "@/components/Cart.tsx";
import Restaurant from "@/admin/Restaurant.tsx";
import AddMenu from "@/admin/AddMenu.tsx";
import Orders from "@/admin/Orders.tsx";
import Success from "@/components/Success.tsx";



const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        path:"/",
        element:<HereSection/>
      },
      {
        path:"/profile",
        element:<Profile/>
      },
      {
        path:"/search/:text",
        element:<SearchPage/>
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetail/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/order/status",
        element: <Success/>,
      },
      {
        path: "/admin/restaurant",
        element: <Restaurant/>,
      },
      {
        path: "/admin/menu",
        element: <AddMenu/>,
      },
      {
        path:"/admin/orders",
        element:<Orders/>
      },
    ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword/>,
  },
  {
    path: "/reset-password",
    element: <ResetPassword/>,
  },




])
function App() {

  return (
      <RouterProvider router={appRouter}>

      </RouterProvider>

  )
}

export default App
