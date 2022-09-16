import { RouterType } from "./type";
import { lazy } from "react";

const IndexPage = lazy(() => import("../pages/IndexPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const LoginPage = lazy(() => import("../pages/Login"));
const routes: Array<RouterType> = [
  {
    path: "/",
    name: "index",
    element: <IndexPage />,
    isAuth: true,
  },
  {
    path: "/login",
    name: "login",
    element: <LoginPage />,
    isAuth: false,
  },
  {
    path: "about",
    name: "about",
    element: <AboutPage />,
    isAuth: true,
  },
];
export default routes;
