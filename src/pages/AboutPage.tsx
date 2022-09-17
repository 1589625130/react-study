import { Outlet } from "react-router-dom";
import Store from "../store";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { TodoStore } from "../store/todoStore";
import { addTodo } from "../store/todoActions";

const AboutPage = () => {
  const store = Store.getState();
  const [state, setState] = useState<TodoStore>(store.todoStore);
  console.log({ state });

  useEffect(() => {
    const unsubscribe = Store.subscribe(() => {
      console.log("subscribe");
      const store = Store.getState();
      setState(store.todoStore);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div>
      <h1>About Page</h1>
      <Button
        onClick={() => {
          Store.dispatch(addTodo("我是豆豆"));
          console.log(Store.getState());
        }}
      >
        点击
      </Button>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default AboutPage;
