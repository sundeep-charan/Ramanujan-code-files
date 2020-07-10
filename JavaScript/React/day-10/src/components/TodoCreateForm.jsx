import React, { Component } from "react";
import "../styles/TodoListCreateForm.css";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";
import { createTodo } from "../redux/actions/todoActions";

class TodoCreateForm extends Component {
  state = {
    title: "",
    isCompleted: false
  };

  handleTitle = e => {
    this.setState({ title: e.target.value });
  };

  handleIsCompleted = e => {
    this.setState({ isCompleted: e.target.checked });
  };

  handleSubmit = e => {
    e.preventDefault();
    // Create a todo
    const todo = {
      id: uuid(),
      title: this.state.title,
      isCompleted: this.state.isCompleted
    };
    this.props.createTodo(todo);
    this.setState({ title: "", isCompleted: false });
  };

  render() {
    return (
      <form className="todo__form" onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleTitle}
          value={this.state.title}
          type="text"
          name="title"
          placeholder="Create new todo"
        />
        <input
          onChange={this.handleIsCompleted}
          type="checkbox"
          name="isCompleted"
          checked={this.state.isCompleted}
        />
        <input type="submit" className="btn btn-create" value="Create" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createTodo: todo => dispatch(createTodo(todo))
  };
};

export default connect(null, mapDispatchToProps)(TodoCreateForm);
