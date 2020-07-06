import React, { Component } from "react";
import axios from "axios";

class TodoCreate extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log(this.props);
  // }

  state = {
    title: "",
    isCompleted: false
  };

  handleTitle = e => {
    this.setState({ title: e.target.value });
  };

  handleCompleted = e => {
    this.setState({ isCompleted: e.target.checked });
  };

  handleSubmit = async e => {
    e.preventDefault();
    // Create a new todo.
    try {
      const { data } = await axios.post(
        `https://corsanywhere.herokuapp.com/https://jsonplaceholder.typicode.com/todos/`,
        {
          title: this.state.title,
          completed: this.state.isCompleted
        }
      );

      this.props.onCreate(data);
      // Redirect to home page.
      this.props.history.push("/");
    } catch (err) {
      alert(err.message);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="">Title</label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleTitle}
        />
        <label htmlFor="">Is completed?</label>
        <input
          type="checkbox"
          name="isCompleted"
          checked={this.state.isCompleted}
          onChange={this.handleCompleted}
        />
        <input type="submit" value="Create Todo" />
      </form>
    );
  }
}

export default TodoCreate;
