import ReactDOM from 'react-dom/client'
import './index.less'
import store from './store'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import moment from 'moment'
import 'moment/dist/locale/zh-cn'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { routes } from '@/router/routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function render() {
  moment.locale('zh-cn')

  const router = createHashRouter(routes, { basename: '/' })

  const query = new QueryClient()

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <QueryClientProvider client={query}>
      <ConfigProvider locale={zhCN}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ConfigProvider>
    </QueryClientProvider>,
  )
}

render()
