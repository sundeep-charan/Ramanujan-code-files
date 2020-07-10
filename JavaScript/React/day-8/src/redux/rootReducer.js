import { CREATE_TODO, DELETE_TODO } from "./actionTypes";

// Structure of a reducer.
const initialState = {
  todos: []
};

// state => the object of the initial data
// action => object containing type, payload(optional)
// { type: "", payload: "" }
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO:
      return { ...state, todos: [...state.todos, payload] }; // payload === object
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload) // payload === number
      };
    default:
      return state;
  }
};

export default reducer;
