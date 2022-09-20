import { FC, Fragment, ReactElement, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

interface AuthProps {
  children: ReactNode
  isAuth?: boolean
}

const Auth: FC<AuthProps> = ({ children, isAuth }): ReactElement => {
  // 设置默认值为false不校验是否登陆
  isAuth = false
  if (isAuth) {
    return <Navigate to="/login" replace={true} />
  } else {
    return <Fragment>{children}</Fragment>
  }
}
export default Auth
