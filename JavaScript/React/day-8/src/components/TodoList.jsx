import React from "react";
import TodoListItem from "./TodoListItem";
import TodoCreate from "./TodoCreate";
import { connect } from "react-redux";

const TodoList = props => {
  console.log("All props", props);
  return (
    <>
      <TodoCreate />
      <ul>
        {props.todos.map(todo => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = storeState => {
  return {
    todos: storeState.todos
  };
};

export default connect(mapStateToProps)(TodoList);
/** Alternative way */
// const connectFn = connect(mapStateToProps)
// export default connectFn(TodoList);
