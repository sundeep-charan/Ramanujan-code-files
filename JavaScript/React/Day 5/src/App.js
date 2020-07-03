import React, { Component } from "react";
import List from "./List";
import Users from "./Users";

class App extends Component {
  state = {
    isHiding: true
  };

  render() {
    return (
      <div>
        <button
          onClick={event => {
            this.setState({ isHiding: !this.state.isHiding });
          }}
        >
          Click me
        </button>
        {this.state.isHiding === true ? <List /> : null}
        <Users />
      </div>
    );
  }
}
// 1. constructor
// * componentWillMount - Deprecated
// 2. render
// 3. componentDidMount
// componentWillUnmount
// getDerivedStateFromProps
// componentShouldUpdate
// componentWillUpdate - Deprecated
// componentDidUpdate - Deprecated

// Mounting phase
// 1. constructor
// * componentWillMount - Deprecated
// 2. render
// 3. componentDidMount

// Updating phase
// shouldComponentUpdate
// 1. componentWillUpdate - Deprecated
// 2. render
// 3. componentDidUpdate

// Unmounting phase
// componentWillUnmount

// const App = () => {
//   constructor(){
//     this.state ={}
//   }
//   return <div>
//     <NavBar name={this.state.name}  />
//     <Form formData={this.state} onChange={handleChalge} />
//   </div>
// }

export default App;
