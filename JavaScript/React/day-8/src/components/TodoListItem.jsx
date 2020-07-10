import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../redux/actions/todoActions";

const TodoListItem = ({ todo, deleteTodo }) => {
  const handleClick = e => {
    deleteTodo(todo.id);
  };

  return (
    <li>
      {todo.content}
      <button onClick={handleClick}>Delete Todo</button>
    </li>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    propsDeleteTodo: todoId => dispatch(deleteTodo(todoId))
  };
};

export default connect(null, mapDispatchToProps)(TodoListItem);
