import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";
import Blog from "./Blog/Blog";
import ErrorPage from "./ErrorPage/ErrorPage";
import RecipesDetails from "./View Recipes/RecipesDetails";
import Login from "./Authentication/Login";
import Registration from "./Authentication/Registration";

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
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/:id',
                element: <RecipesDetails></RecipesDetails>,
                loader: ({ params }) => fetch(`https://server-mahadihasanweb.vercel.app/${params.id}`)
            },
        ],
    },
]);
