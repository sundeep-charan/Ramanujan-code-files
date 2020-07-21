import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import VideoDetail from "./pages/VideoDetail";
import HomePage from "./pages/HomePage";
import SearchResultPage from "./pages/SearchResultPage";
import PlaylistPage from "./pages/PlaylistPage";

import NavBar from "./components/NavBar";
import Search from "./components/Search";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Search />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/videos/:videoId" component={VideoDetail} />
        <Route exact path="/playlists" component={PlaylistPage} />
        <Route exact path="/search/:searchQuery" component={SearchResultPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
