import React, { Component } from "react";
import "../styles/TodoEdit.css";
import { updateTodo } from "../redux/actions/todoActions";
import { connect } from "react-redux";

class TodoEdit extends Component {
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
    // Editing the todo and then switching off the modal
    this.props.updateTodo(this.props.currentTodoId, {
      title: this.state.title,
      isCompleted: this.state.isCompleted
    });
    this.props.history.push("/todos");
    this.props.switchOffEdit();
  };

  render() {
    return (
      <div className="todo__edit">
        <h2>Edit Todo</h2>
        <div className="container-edit">
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleTitle}
              value={this.state.title}
              className="edit-input-todo"
              type="text"
              name="title"
            />
            <input
              onChange={this.handleIsCompleted}
              type="checkbox"
              name="isCompleted"
              checked={this.state.isCompleted}
            />
            <input type="submit" className="btn btn-edit" value="Edit" />
          </form>
          <div className="edit__buttons">
            <button
              onClick={this.props.switchOffEdit}
              className="btn btn-delete"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateTodo: (todoId, newTodo) => dispatch(updateTodo(todoId, newTodo))
  };
};

export default connect(null, mapDispatchToProps)(TodoEdit);
