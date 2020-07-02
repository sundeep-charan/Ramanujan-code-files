import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  // handleEmail = event => {
  //   this.setState({ email: event.target.value });
  // };

  // handleName = event => {
  //   this.setState({ name: event.target.value });
  // };

  // handlePassword = event => {
  //   this.setState({ password: event.target.value });
  // };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.name, this.state.password, this.state.email);
  };

  render() {
    console.log("Rendering");
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          name="name"
          value={this.state.name}
        />
        <input
          onChange={this.handleChange}
          type="email"
          name="email"
          value={this.state.email}
        />
        <input
          onChange={this.handleChange}
          type="password"
          name="password"
          value={this.state.password}
        />
        <input type="submit" name="" value="Sign up" />
      </form>
    );
  }
}

export default Form;
