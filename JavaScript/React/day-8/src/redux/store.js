import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { createTodo } from "./actions/todoActions";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

/* {
  type: 'CREATE_TODO',
  payload: {
    id: 1,
    content: "Eat breakfast",
    isCompleted: true
  }
}*/

store.subscribe(() => console.log(store.getState()));

const todoCreateDispatchObject1 = createTodo({
  id: 1,
  content: "Eat breakfast",
  isCompleted: true
});

const todoCreateDispatchObject2 = createTodo({
  id: 2,
  content: "Take a shower",
  isCompleted: true
});

// store.dispatch({ type: "CREATE_TODO", payload: {} })
console.log(store.dispatch(todoCreateDispatchObject1));
store.dispatch(todoCreateDispatchObject2);

console.log(store);

export default store;
