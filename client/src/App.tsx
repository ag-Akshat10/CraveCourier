import './App.css'
import Login from "@/auth/Login.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import MainLayout from "@/MainLayout.tsx";
import Signup from "@/auth/Signup.tsx";

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
  }
])
function App() {

  return (
      <RouterProvider router={appRouter}>

      </RouterProvider>

  )
}

export default App
