import Axios from './Axios'
// import env from "@/utils/env";

const http = new Axios({
  baseURL: '/api',
  timeout: 10000,
})

export default http
