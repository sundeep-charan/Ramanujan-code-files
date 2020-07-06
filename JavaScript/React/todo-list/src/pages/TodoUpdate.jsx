import React, { Component } from "react";
import axios from "axios";

class TodoUpdate extends Component {
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

  handleTitle = e => {
    this.setState({ todo: { ...this.state.todo, title: e.target.value } });
  };

  handleCompleted = e => {
    this.setState({
      todo: { ...this.state.todo, completed: e.target.checked }
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    // Create a new todo.
    try {
      const { data } = await axios.put(
        `https://corsanywhere.herokuapp.com/https://jsonplaceholder.typicode.com/todos/${this.props.match.params.todoId}`,
        {
          title: this.state.todo.title,
          completed: this.state.todo.completed
        }
      );

      this.props.onUpdate(data);
      // Redirect to home page.
      this.props.history.push("/");
    } catch (err) {
      alert(err.message);
    }
  };

  render() {
    return !this.state.todo ? (
      <h1>Fetching todo ...</h1>
    ) : (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="">Title</label>
        <input
          type="text"
          name="title"
          value={this.state.todo.title}
          onChange={this.handleTitle}
        />
        <label htmlFor="">Is completed?</label>
        <input
          type="checkbox"
          name="isCompleted"
          checked={this.state.todo.completed}
          onChange={this.handleCompleted}
        />
        <input type="submit" value="Update Todo" />
      </form>
    );
  }
}

export default TodoUpdate;
