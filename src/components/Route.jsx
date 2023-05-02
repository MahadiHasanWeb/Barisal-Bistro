import { createBrowserRouter } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";
import Blog from "./Blog/Blog";
import ErrorPage from "./ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ],
    },
]);
