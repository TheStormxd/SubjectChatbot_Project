import AuthLayout from "../client/layouts/AuthLayout";
import Login from "../client/pages/Login";
import Register from "../client/pages/Register";

export const routes = [
    {
        path:"/users/register",
        element:<AuthLayout><Register/></AuthLayout>
    },
    {
        path:"/users/login",
        element: <AuthLayout><Login/></AuthLayout>
    }
];
