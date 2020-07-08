import { CREATE_TODO } from "../actionTypes";

export const createTodo = todo => {
  return {
    type: CREATE_TODO,
    payload: todo
  };
};

export const deleteTodo = todoId => {
  return {
    type: "DELETE_TODO",
    payload: todoId
  };
};

export const getTodos = () => {
  return {
    type: "GET_TODOS"
  };
};
