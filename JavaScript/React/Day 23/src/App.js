import React from "react";
import Search from "./search/Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      Hello world
      <Search doSomething={() => console.log("Done something")} />
    </div>
  );
}

export default App;
