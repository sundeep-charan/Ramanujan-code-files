import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NavBar from "./NavBar";
import PostList from "./PostList";
import PostDetail from "./PostDetail";

import { Route, Switch, Redirect } from "react-router-dom";

// react-router-dom
const App = () => {
  // /contact
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        {/**<h1 history={} match={} location={}>sdfhsjhfsjkh</h1> */}
        <Route exact path="/contact" component={Contact} />
        {/* <Route
          exact
          path="/contact/sub"
          component={}
        /> */}
        <Route path="/about" component={About} />
        <Route exact path="/posts" component={PostList} />
        <Route exact path="/posts/:postId" component={PostDetail} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
