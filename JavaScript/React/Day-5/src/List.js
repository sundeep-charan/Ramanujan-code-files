import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    console.log("Component being created: constructor");
    super(props);
    this.state = {
      currentDate: new Date()
    };
  }

  UNSAFE_componentWillMount() {
    console.log("Component will mount shortly: componentWillMount");
  }

  componentDidMount() {
    console.log("Component has mounted successfully: componentDidMount");
    this.interval = setInterval(() => {
      this.setState({ currentDate: new Date() });
    }, 1000);
  }

  UNSAFE_componentWillUpdate() {
    console.log("Component is going to update: componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("Component has been updated: componentDidUpdate");
  }

  render() {
    console.log("Component is rendering: rendering");
    return (
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
      </ul>
    );
  }

  componentWillUnmount() {
    console.log("Component is getting unmounted: componentWillUnmount");
    clearInterval(this.interval);
  }
}

export default List;
