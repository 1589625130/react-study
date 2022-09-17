import { ADD } from "./todoActionsType";
import { Action } from "./todoStore";

export const addTodo = (todo: string): Action => ({
  type: ADD,
  value: todo,
});
