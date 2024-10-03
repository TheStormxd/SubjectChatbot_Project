import AuthLayout from "../client/layouts/AuthLayout";
import Register from "../client/pages/Register";

export const routes = [
    {
        path:"/user/register",
        element:<AuthLayout><Register/></AuthLayout>
    }
];
