import Home from "./../test2.cjsx";
import About from "./../test.cjsx";

export default [
    {
        path: "/",
        component: Home,
        exact: true,
    },
    {
        path: "/about",
        component: About,
        exact: true,
    },
		{
        path: "/about/:id",
        component: Home,
        exact: true,
		}
];
