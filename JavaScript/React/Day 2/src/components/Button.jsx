import React from "react";
import "../styles/Button.css";

const Button = ({ value, type = "button", background }) => (
  <input type={type} style={{ background }} className="button" value={value} />
);

export default Button;
