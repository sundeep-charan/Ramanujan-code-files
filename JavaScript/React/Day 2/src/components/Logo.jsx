import React from "react";
import "../styles/Logo.css";
const Logo = ({ logoURL }) => (
  <img
    className="Logo"
    src={logoURL}
    style={{ width: "50px", height: "50px" }}
    alt="logo"
  />
);

export default Logo;
