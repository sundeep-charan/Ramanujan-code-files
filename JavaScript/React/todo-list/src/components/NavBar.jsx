import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/todos/create">
        <button>Create Todo</button>
      </Link>
    </nav>
  );
};

export default NavBar;
