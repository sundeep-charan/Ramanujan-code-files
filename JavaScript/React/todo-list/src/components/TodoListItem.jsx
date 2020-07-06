import React from "react";
import { Link } from "react-router-dom";

const TodoListItem = ({ todo, onDelete }) => {
  const handleClick = () => {
    onDelete(todo.id);
  };

  return (
    <>
      <Link to={`/todos/${todo.id}`}>
        <h2>
          {todo.id + ") "} Title: {todo.title}
        </h2>
      </Link>
      <button onClick={handleClick}>Delete</button>
      <Link to={`/todos/update/${todo.id}`}>
        <button>Update</button>
      </Link>
      <span>Is completed?: {todo.completed.toString()}</span>
    </>
  );
};

export default TodoListItem;
