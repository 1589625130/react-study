import { RouterType } from './type'
import { lazy, ReactNode, Suspense } from 'react'
import MainLayout from '@/layouts/MainLayout'
import { Spin } from 'antd'

const IndexPage = lazy(() => import('../pages/IndexPage'))
const AboutPage = lazy(() => import('../pages/AboutPage'))
const LoginPage = lazy(() => import('../pages/Login'))
const AboutInfo = lazy(() => import('../pages/about/AboutInfo'))
const HomePage = lazy(() => import('../pages/HomePage'))

function LazyLoadComponent(component: ReactNode): ReactNode {
  return <Suspense fallback={<Spin />}>{component}</Suspense>
}

const routes: Array<RouterType> = [
  {
    path: '/',
    element: <MainLayout />,
    name: 'mainLayout',
    title: '首页',
    children: [
      {
        path: '',
        name: 'index',
        element: LazyLoadComponent(<IndexPage />),
        title: '首页',
        isAuth: true,
      },
      {
        path: '/login',
        name: 'login',
        element: LazyLoadComponent(<LoginPage />),
        title: '登录',
        isAuth: false,
      },
      {
        path: '/home',
        name: 'home',
        title: '主页',
        element: LazyLoadComponent(<HomePage />),
        isAuth: false,
      },
      {
        path: '/about',
        name: 'about',
        title: '关于',
        element: LazyLoadComponent(<AboutPage />),
        isAuth: true,
      },
    ],
  },
]
export default routes
