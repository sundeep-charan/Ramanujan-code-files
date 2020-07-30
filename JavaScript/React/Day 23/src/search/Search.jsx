import React, { Component } from "react";
import Axios from "axios";

class Search extends Component {
  state = {
    text: "",
    isLoading: true,
    users: null
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  async componentDidMount() {
    const {
      data: { data }
    } = await Axios.get(`https://reqres.in/api/users`);
    this.setState({ users: data, isLoading: false });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.users
            ? this.state.users.map(user => (
                <li data-testid="list-element" key={user.id}>
                  {user.first_name} {user.last_name}
                </li>
              ))
            : null}
        </ul>
        <button data-testid="clicker" onClick={this.props.doSomething}>
          Click me
        </button>
        {this.state.isLoading ? null : <p>Rendering complete!</p>}
        <input
          type="text"
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Search;
