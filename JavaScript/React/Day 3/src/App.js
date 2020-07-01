import React, { Component } from "react";
import User from "./User";
import Toggle from "./Toggle";
import "./App.css";

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     name: "sundeep",
  //     job: "instructor"
  //   };
  // }

  state = {
    name: "sundeep",
    job: "instructor",
    users: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874"
        }
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
          street: "Victor Plains",
          suite: "Suite 879",
          city: "Wisokyburgh",
          zipcode: "90566-7771"
        }
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        address: {
          street: "Douglas Extension",
          suite: "Suite 847",
          city: "McKenziehaven"
        }
      }
    ],
    toggle: false
  };

  render() {
    return (
      <div className="App">
        <Toggle />
        Hi my name is {this.state.name} and I am working as {this.state.job}
        <User />
        {this.state.users.map(user => (
          <User key={user.id} currentUser={user} />
        ))}
        {/**
         * [
         * <User key={user.id} currentUser={user} />,
         * <User key={user.id} currentUser={user} />,
         * <User key={user.id} currentUser={user} />
         * ]
         *
         */}
      </div>
    );
  }
}

export default App;
