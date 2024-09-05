

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
