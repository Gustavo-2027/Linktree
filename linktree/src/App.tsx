import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/home/Index"
import Admin from "./pages/admin/Index"
import Login from "./pages/login/Index"
import Redes from "./pages/redes/Index"
import Private from "./routes/Private"
import Erro from "./pages/error/Index"

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
    element: <Private>
      <Admin/>
    </Private>
  },
  {
    path: "/admin/social",
    element: <Private>
      <Redes/>
    </Private>
  },
  {
    path: "*",
    element: <Erro/>
  }
])

export {router}