import Axios from "./Axios";
// import env from "@/utils/env";

const http = new Axios({
  // @ts-ignore
  baseURL: import.meta.env.VITE_APP_BASE_API === 'development' ? 'dev-api' : '',
  timeout: 10000,
})

export default http;
