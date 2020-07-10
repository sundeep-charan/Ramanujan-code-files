import React, { Component } from "react";
import "../styles/TodoListCreateForm.css";
import { connect } from "react-redux";
import { logIn } from "../redux/actions/userActions";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // Log in
    const { email, password } = this.state;
    this.props.logIn({ email, password });
    this.props.history.push("/todos");
  };

  render() {
    return this.props.user ? (
      <Redirect to="/todos" />
    ) : (
      <form className="todo__form" onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          value={this.state.title}
          type="email"
          name="email"
          placeholder="johndoe123@something.com"
        />
        <input
          onChange={this.handleChange}
          type="password"
          name="password"
          placeholder="********"
          checked={this.state.isCompleted}
        />
        <input type="submit" className="btn btn-create" value="Login" />
      </form>
    );
  }
}

const mapStateToProps = storeState => {
  return { user: storeState.userState.user };
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: user => dispatch(logIn(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
