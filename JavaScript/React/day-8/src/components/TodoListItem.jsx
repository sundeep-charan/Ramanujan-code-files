import React from "react";

const TodoListItem = props => {
  console.log(props);
  return <li>{props.todo.content}</li>;
};

export default TodoListItem;
