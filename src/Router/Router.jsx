import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Carrer from "../Pages/Carrer/Carrer";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ErrorPage from "../ErrorPage/ErrorPage";
import NewsDetails from "../Pages/SharedPages/NewsDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Bookmarks from "../Pages/Bookmarks/Bookmarks";


const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/news/:id',
                element: <PrivateRoute> <NewsDetails></NewsDetails></PrivateRoute>,
                loader: () => fetch('/news.json')
                

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
                path: "/bookmarks",
                element: <PrivateRoute><Bookmarks></Bookmarks></PrivateRoute>
            },
            {
                path: "/login",
                element:<Login></Login>
            },
            {
                path: "/register",
                element:<Register></Register>
            }
        ]
    }
])

export default router