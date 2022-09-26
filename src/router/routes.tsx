import { RouterType } from './type'
import { lazyLoadPage } from '@/utils'
import Layouts from '@/layouts'

export const routes: Array<RouterType> = [
  {
    path: '/',
    element: <Layouts />,
    name: 'mainLayout',
    title: '首页',
    children: [
      {
        path: '/',
        name: 'index',
        element: lazyLoadPage('home'),
        title: '首页',
        isAuth: true,
      },
      {
        path: '/home',
        name: 'home',
        title: '主页',
        element: lazyLoadPage('home'),
        isAuth: false,
      },
      {
        path: '/about',
        name: 'about',
        title: '关于',
        element: lazyLoadPage('about'),
        isAuth: true,
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    element: lazyLoadPage('login'),
    title: '登录',
    isAuth: false,
  },
]
