import React from "react";
import Logo from "./Logo";
import Button from "./Button";
import "../styles/NavBar.css";

const NavBar = () => (
  <nav className="NavBar">
    <Logo logoURL="https://seeklogo.com/images/T/telegram-logo-AD3D08A014-seeklogo.com.png" />
    <Button value="Login" background="ivory" />
  </nav>
);

export default NavBar;
