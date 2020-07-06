import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      {/* <a href="/">Home</a> */}
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/posts">All posts</Link>
    </div>
  );
};

export default NavBar;
