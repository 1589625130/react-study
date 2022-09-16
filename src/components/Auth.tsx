import { FC, ReactNode } from "react";
import { Navigate, Navigator } from "react-router-dom";
import Login from "../pages/Login";

interface AuthProps {
  children: ReactNode;
  isAuth?: boolean;
}

const Auth = (props: AuthProps) => {
  const { children, isAuth } = props;
  if (isAuth) {
    Navigate({ to: "/login" });
    return null;
  } else {
    return children;
  }
};
export default Auth;
