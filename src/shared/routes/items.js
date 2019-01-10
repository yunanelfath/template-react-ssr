import Home from "./../test";
import Currency from "./../components/currency/index.cjsx";

export default [
    {
        path: "/",
        component: Home,
        exact: true,
    },
    {
        path: "/currency",
        component: Currency,
        exact: true,
    }
];
