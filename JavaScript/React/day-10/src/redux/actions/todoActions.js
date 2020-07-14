import axios from "axios";
import {
  CREATE_TODO,
  GET_TODOS,
  DELETE_TODO,
  UPDATE_TODO
} from "../actionTypes";

export const createTodo = todo => {
  return {
    type: CREATE_TODO,
    payload: todo
  };
};

export const deleteTodo = todoId => {
  return {
    type: DELETE_TODO,
    payload: todoId
  };
};

export const updateTodo = (todoId, newTodo) => {
  return {
    type: UPDATE_TODO,
    payload: {
      id: todoId,
      newTodo
    }
  };
};

// export const getAllTodos = (todoCount) => {
//   const sampleData = [
//     { id: 1, title: "Todo1", isCompleted: false },
//     { id: 2, title: "Todo2", isCompleted: true },
//     { id: 3, title: "Todo3", isCompleted: true }
//   ];
//   return {
//     type: GET_TODOS,
//     payload: sampleData
//   };
// };

export const getAllTodos = function (todoCount = 4) {
  return async function (dispatch) {
    const { data } = await axios(
      `https://corsanywhere.herokuapp.com/https://jsonplaceholder.typicode.com/todos`
    );
    console.log(data);
    return dispatch({
      type: GET_TODOS,
      payload: data
    });
  };
};
