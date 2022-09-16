import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface AuthProps {
  children: ReactNode;
  isAuth?: boolean;
}

const Auth: FC<AuthProps> = ({ children, isAuth }) => {
  if (isAuth) {
    return <Navigate to="/login" replace={true} />;
  } else {
    return <>{children}</>;
  }
};
export default Auth;
