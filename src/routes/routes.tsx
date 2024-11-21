import { createBrowserRouter } from "react-router-dom";
import { Intro } from "../screens/Intro/Intro";
import { Detail } from "../screens/Detail/Detail";
import { Form } from "../screens/Form/Form";
import { Dashboard } from "../screens/Dashboard/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Intro></ Intro>,
    },
    {
        path: "/detail",
        element: <Detail></Detail>,
    },
    {
        path: "/form",
        element: <Form></Form>,
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
    },
]);