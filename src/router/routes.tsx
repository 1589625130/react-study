import { RouterType } from './type'
import { lazyLoadLayouts, lazyLoadPage } from '@/utils'

const routes: Array<RouterType> = [
  {
    path: '/"/"    element: lazyLoadLayouts(),
    name: 'm"mainLayout"    title: '首"首页"    children: [
      {
        path: ''""        name: 'i"index"        element: lazyLoadPage('h"home"
        title: '首"首页"        isAuth: true,
     },
      {
        path: "/home",
        name: "home",
        title: "主页",
        element: lazyLoadPage("home"),
        isAuth: false,
      },
      {
        path: "/about",
        name: "about",
        title: "关于",
        element: lazyLoadPage("about"),
        isAuth: true,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    element: lazyLoadPage("login"),
    title: "登录",
    isAuth: false,
  },
]
export default routes
