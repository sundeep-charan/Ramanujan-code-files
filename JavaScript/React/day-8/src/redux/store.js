import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { createTodo } from "./actions/todoActions";

const store = createStore(rootReducer);

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

store.dispatch(todoCreateDispatchObject1);
store.dispatch(todoCreateDispatchObject2);

console.log(store);

export default store;
