import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

console.log(thunk);

const loggingMiddleware = function (store) {
  return function (dispatch) {
    return function (action) {
      console.log(store, dispatch, action);
      console.log(`Previous state: ${JSON.stringify(store.getState())}`);
      console.log(`Action of type ${action.type} is called`);
      dispatch(action);
      console.log(`New state: ${JSON.stringify(store.getState())}`);
    };
  };
};

// const loggingMiddleware = store => next => action => {

// }

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch({
  type: "LOG_IN",
  payload: { email: "sundeep@attainu.com", password: "1234" }
});

export default store;
