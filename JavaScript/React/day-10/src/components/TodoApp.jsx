import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import TodoCreateForm from "./TodoCreateForm";
import TodoList from "./TodoList";
import TodoEdit from "./TodoEdit";

class TodoApp extends Component {
  state = {
    editMode: false,
    currentTodoId: null
  };

  switchOnEdit = todoId => {
    console.log("Switched on ");
    this.setState({ editMode: true, currentTodoId: todoId });
  };

  switchOffEdit = () => {
    this.setState({ editMode: false, currentTodoId: null });
  };

  render() {
    return this.props.user === null ? (
      <Redirect to="/login" />
    ) : (
      <>
        <TodoCreateForm />
        <TodoList switchOnEdit={this.switchOnEdit} />
        {this.state.editMode === true ? (
          <TodoEdit
            currentTodoId={this.state.currentTodoId}
            switchOffEdit={this.switchOffEdit}
            history={this.props.history}
          />
        ) : null}
      </>
    );
  }
}

const mapStateToProps = storeState => {
  return {
    user: storeState.userState.user
  };
};

export default connect(mapStateToProps)(TodoApp);
