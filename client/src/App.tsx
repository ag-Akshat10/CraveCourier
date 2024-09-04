

import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Signup from "@/auth/Signup.tsx";
// @ts-ignore
import Login from "@/auth/Login.tsx";
import ForgotPassword from "@/auth/ForgotPassword.tsx";
import ResetPassword from "@/auth/ResetPassword.tsx";
import VerifyEmail from "@/auth/VerifyEmail.tsx";
import HereSection from "@/components/HereSection.tsx";
import MainLayout from "@/layout/MainLayout.tsx";
import Profile from "@/components/Profile.tsx";
import SearchPage from "@/components/SearchPage.tsx";



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
  {
    path: "/verify-email",
    element: <VerifyEmail/>,
  },

])
function App() {

  return (
      <RouterProvider router={appRouter}>

      </RouterProvider>

  )
}

export default App
