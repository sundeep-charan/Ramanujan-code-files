import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <TodoList hi="hello" good="morning" />
    </div>
  );
}

export default App;
