import { CREATE_TODO } from "./actionTypes";

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
      return { ...state, todos: [...state.todos, payload] };
    default:
      return state;
  }
};

export default reducer;
