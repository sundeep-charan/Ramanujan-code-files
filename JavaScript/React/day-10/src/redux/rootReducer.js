import { combineReducers } from "redux";
import todoReducer from "./reducers/todoReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  todoState: todoReducer,
  userState: userReducer
});

/**{
 *  todoState: {
 *    todos: null
 *  },
 * 
 * userState: {
 *  user: null
 * }
} */

export default rootReducer;
