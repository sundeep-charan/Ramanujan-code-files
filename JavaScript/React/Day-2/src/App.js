import React from "react";
import "./App.css";

// Components
import NavBar from "./components/NavBar";
import SidePanel from "./components/SidePanel";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <SidePanel />
      <Footer />
    </div>
  );
};

export default App;
