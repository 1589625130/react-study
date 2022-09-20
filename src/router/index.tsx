import { HashRouter, Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { RouterType } from './type'
import routes from './routes'
import Auth from '@/components/Auth'
import { Spin } from 'antd'

//路由遍历
function renderRoutes(routes: Array<RouterType>) {
  return routes.map((item) => {
    return (
      <Route element={<Auth isAuth={item.isAuth}>{item.element}</Auth>} path={item.path} key={item.name}>
        {item.children && renderRoutes(item.children)}
      </Route>
    )
  })
}

function Router() {
  console.log('生成路由')
  return (
    <HashRouter>
      <Suspense fallback={<Spin spinning={true} />}>
        <Routes>{renderRoutes(routes)}</Routes>
      </Suspense>
    </HashRouter>
  )
}

export default Router
