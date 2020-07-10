import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, composeWithDevTools());

store.dispatch({
  type: "LOG_IN",
  payload: { email: "sundeep@attainu.com", password: "1234" }
});

export default store;
