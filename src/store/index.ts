import { createStore } from "redux"; // 引入createStore方法
// import { createLogger } from "redux-logger";
import reducer from "./reducer";

// const loggerMiddleware = createLogger();

const store = createStore(reducer); // 创建数据存储仓库

export default store;
