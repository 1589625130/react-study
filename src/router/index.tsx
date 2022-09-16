import { HashRouter, Route, Routes, RedirectFunction } from "react-router-dom";
import { Suspense } from "react";
import { RouterType } from "./type";
import routes from "./routes";

//路由遍历
function renderRoutes(routes: Array<RouterType>) {
  return routes.map((item) => {
    return (
      <Route element={item.element} path={item.path} key={item.name}>
        {item.children && renderRoutes(item.children)}
      </Route>
    );
  });
}

function Router() {
  console.log("生成路由");
  return (
    <HashRouter>
      <Suspense>
        <Routes>{renderRoutes(routes)}</Routes>
      </Suspense>
    </HashRouter>
  );
}

export default Router;
