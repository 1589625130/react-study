import { ADD } from "./todoActionsType";

export interface TodoStore {
  todos: string[];
  inputValue: string;
}

export interface Action {
  type: string;
  value: string;
}

export default (
  state: TodoStore = {
    todos: ["吃饭", "睡觉", "打豆豆"],
    inputValue: "",
  },
  { type, value }: Action
) => {
  switch (type) {
    case ADD:
      const newState = JSON.parse(JSON.stringify(state));
      newState.todos.push(value);
      newState.inputValue = "";
      return newState;
    default:
      return state;
  }
};
