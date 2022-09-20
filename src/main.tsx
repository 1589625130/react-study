import React from 'react'
// import ReactDOM from "react-dom/client";
import { render } from 'react-dom'
import './index.css'
import Router from './router'
import 'antd/dist/antd.css'
import store from './store'
import { Provider } from 'react-redux'

const app = document.getElementById('root')
// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <Provider store={store}>
//     <Router />
//   </Provider>
// );
render(
  <Provider store={store}>
    <Router />
  </Provider>,
  app,
)
