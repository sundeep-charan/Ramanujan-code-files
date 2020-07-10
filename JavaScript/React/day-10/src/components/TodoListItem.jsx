import React from "react";
import "../styles/TodoListItem.css";
import { connect } from "react-redux";
import { deleteTodo } from "../redux/actions/todoActions";

const TodoListItem = ({ todo, deleteTodo, switchOnEdit }) => {
  return (
    <li className="todo__item">
      <span>{todo.title}</span>
      <div className="todo__buttons">
        <button onClick={() => switchOnEdit(todo.id)} className="btn btn-edit">
          Edit
        </button>
        <button onClick={() => deleteTodo(todo.id)} className="btn btn-delete">
          Delete
        </button>
      </div>
    </li>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: todoId => dispatch(deleteTodo(todoId))
  };
};

export default connect(null, mapDispatchToProps)(TodoListItem);
