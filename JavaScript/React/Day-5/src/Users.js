import React, { Component } from "react";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: null
    };
  }

  // Holy grail for async fetch
  async componentDidMount() {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const users = await response.json();
      this.setState({ users: users.data });
    } catch (err) {
      console.error(err.message);
    }
  }

  render() {
    return this.state.users === null ? (
      <h1>Loading</h1>
    ) : (
      <div>
        {this.state.users.map(user => (
          <h2 key={user.id}>
            {user.first_name} {user.last_name}
          </h2>
        ))}
      </div>
    );
  }
}

export default Users;
