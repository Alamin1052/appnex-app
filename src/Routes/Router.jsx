import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([

    {
        path: '/',
        Component: Root,
        // errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/apps',
                Component: Apps
            },
            {
                path: '/installation',
                Component: Installation
            },
            {
                path: '/apps/:id',
                Component: AppDetails
            },
            {
                path: '*',
                Component: ErrorPage
            }

        ]

    }


])
export default router
