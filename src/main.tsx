import React from 'react'
import { render } from 'react-dom'
// import ReactDOM from "react-dom/client";
import './index.less'
import Router from './router'
import store from './store'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

const app = document.getElementById('root')

render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <Router />
    </Provider>
  </ConfigProvider>,

  app,
)
// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <Provider store={store}>
//     <Router />
//   </Provider>
// );
