import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/home/Index"
import Admin from "./pages/admin/Index"
import Login from "./pages/login/Index"
import Redes from "./pages/redes/Index"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/admin",
    element: <Admin/>
  },
  {
    path: "/admin/social",
    element: <Redes/>
  },
])

export {router}