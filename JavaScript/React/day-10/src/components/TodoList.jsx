import React from "react";
import TodoListItem from "../components/TodoListItem";
import { connect } from "react-redux";

const todoListStyles = {
  margin: "1rem",
  height: "80%",
  overflow: "auto",
  width: "75vw"
};

// { id: number, title: string, isCompleted: boolean }
const TodoList = ({ todos, switchOnEdit }) => {
  console.log("Rendering");
  return (
    <ul style={todoListStyles}>
      {todos.map(todo => (
        <TodoListItem switchOnEdit={switchOnEdit} key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

const mapStateToProps = storeState => {
  return {
    todos: storeState.todoState.todos
  };
};

export default connect(mapStateToProps)(TodoList);
