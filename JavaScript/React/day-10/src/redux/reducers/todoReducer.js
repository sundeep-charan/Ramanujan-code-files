import {
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  GET_TODOS
} from "../actionTypes";

const initialState = {
  todos: []
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TODOS:
      return { ...state, todos: payload };
    case CREATE_TODO:
      return { ...state, todos: [...state.todos, payload] };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload)
      };
    case UPDATE_TODO:
      const { id, newTodo } = payload;
      const newTodos = [...state.todos];
      const todoIndex = newTodos.findIndex(todo => todo.id === id);
      newTodos[todoIndex] = { id, ...newTodo };
      return { ...state, todos: newTodos };
    // Alternative method.
    // const newTodos = state.todos.filter(todo => todo.id !== payload.id)
    // newTodos.push({ id, ...newTodo })
    // return { ...state, todos: newTodos };
    default:
      return state;
  }
};

export default userReducer;
