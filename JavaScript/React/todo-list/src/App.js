import React, { Component } from "react";
import TodoList from "./components/TodoList";
import TodoDetail from "./pages/TodoDetail";
import TodoCreate from "./pages/TodoCreate";
import TodoUpdate from "./pages/TodoUpdate";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    todos: null
  };

  deleteTodo = async todoId => {
    const newTodos = this.state.todos.filter(todo => todo.id !== todoId);
    try {
      const { data } = await axios.delete(
        `https://corsanywhere.herokuapp.com/https://jsonplaceholder.typicode.com/todos/${todoId}`
      );
      console.log(data);
      this.setState({ todos: newTodos });
    } catch (err) {
      alert(err.message);
    }
  };

  createTodo = todo => {
    this.setState({ todos: [...this.state.todos, todo] });
    // this.props.history.push("/");
  };

  updateTodo = todo => {
    const todoIndex = this.state.todos.findIndex(t => t.id === todo.id);
    const newTodos = [...this.state.todos];
    newTodos[todoIndex] = todo;
    this.setState({ todos: newTodos });
  };

  async componentDidMount() {
    const { data } = await axios(
      `https://corsanywhere.herokuapp.com/https://jsonplaceholder.typicode.com/todos`
    );
    this.setState({ todos: data });
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        {this.state.todos ? (
          <Switch>
            <Route
              exact
              path="/"
              render={routeProps => (
                <TodoList
                  {...routeProps}
                  onDelete={this.deleteTodo}
                  todos={this.state.todos}
                />
              )}
            />
            <Route
              exact
              path="/todos/create"
              render={routeProps => (
                <TodoCreate {...routeProps} onCreate={this.createTodo} />
              )}
            />
            <Route exact path="/todos/:todoId" component={TodoDetail} />
            <Route
              exact
              path="/todos/update/:todoId"
              render={routeProps => (
                <TodoUpdate {...routeProps} onUpdate={this.updateTodo} />
              )}
            />
          </Switch>
        ) : null}
      </div>
    );
  }
}

export default App;
