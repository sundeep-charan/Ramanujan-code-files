import React, { Component } from "react";
import axios from "axios";

class TodoDetail extends Component {
  state = {
    todo: null
  };

  async componentDidMount() {
    const { match } = this.props;
    const { data } = await axios(
      `https://corsanywhere.herokuapp.com/https://jsonplaceholder.typicode.com/todos/${match.params.todoId}`
    );
    this.setState({ todo: data });
  }
  render() {
    return !this.state.todo ? (
      <h2>Fetching todo ...</h2>
    ) : (
      <div>
        <h1>Todo for ID: {this.state.todo.id}</h1>
        <p>Title: {this.state.todo.title}</p>
        <p>IS completed?: {this.state.todo.completed.toString()}</p>
      </div>
    );
  }
}

export default TodoDetail;
