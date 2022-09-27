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
import { QueryClient, QueryClientProvider, QueryClientConfig } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function render() {
  moment.locale('zh-cn')

  const router = createHashRouter(routes, { basename: '/' })

  const queryClientConfig: QueryClientConfig = {
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 数据缓存5分钟
        refetchOnWindowFocus: false, // 窗口聚焦时不重新获取数据
        refetchOnMount: false, // 组件挂载时不重新获取数据
        refetchOnReconnect: false, // 断网重连时不重新获取数据
        refetchInterval(data, query) {
          // 5分钟重新获取数据
          return 1000 * 60 * 5
        },
      },
    },
  }

  const query = new QueryClient(queryClientConfig)

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <QueryClientProvider client={query}>
      <ConfigProvider locale={zhCN}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ConfigProvider>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>,
  )
}

render()
