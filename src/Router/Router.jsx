import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Carrer from "../Pages/Carrer/Carrer";
import Login from "../Login/Login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/carrer",
                element:<Carrer></Carrer>
            },
            {
                path: "/login",
                element:<Login></Login>
            }
        ]
    }
])

export default router