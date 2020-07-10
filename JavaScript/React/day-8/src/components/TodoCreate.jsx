import React, { Component } from "react";
import { createTodo, deleteTodo } from "../redux/actions/todoActions";
import { connect } from "react-redux";

class TodoCreate extends Component {
  state = {
    content: ""
  };

  handleChange = e => {
    console.log(this.props);
    this.setState({ content: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // Create a todo.
    const todo = {
      content: this.state.content,
      id: Math.random(),
      isCompleted: false
    };
    this.props.propsCreateTodo(todo);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="content"
          value={this.state.content}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // propsCreateTodo: function (todo) {
    //   const todoDispatchObject = createTodo(todo);
    //   return dispatch(todoDispatchObject);
    // }
    propsCreateTodo: todo => dispatch(createTodo(todo)),
    propsDeleteTodo: todoId => dispatch(deleteTodo(todoId))
  };
};

export default connect(null, mapDispatchToProps)(TodoCreate);
