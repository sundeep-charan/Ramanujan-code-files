import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = props => {
  console.log(props);
  const updateTodo = todoId => {
    // Updating
  };

  // !this.state.todos === (this.state.todos === null)

  return props.todos.map(todo => (
    <TodoListItem
      onDelete={props.onDelete}
      // onUpdate={this.updateTodo}
      key={todo.id}
      todo={todo}
    />
  ));
};

export default TodoList;
