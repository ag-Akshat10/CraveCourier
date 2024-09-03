

import {createBrowserRouter, RouterProvider} from "react-router-dom"
import MainLayout from "@/MainLayout.tsx";
import Signup from "@/auth/Signup.tsx";
// @ts-ignore
import Login from "@/auth/Login.tsx";
import ForgotPassword from "@/auth/ForgotPassword.tsx";
import ResetPassword from "@/auth/ResetPassword.tsx";
import VerifyEmail from "@/auth/VerifyEmail.tsx";

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    // children:[
    //   {
    //     path:"/login"
    //   }
    // ]
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
