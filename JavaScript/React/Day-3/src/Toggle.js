import React from "react";

const Toggle = ({ isSwitchedOn = false }) => {
  const outerCircleStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: "50%",
    border: "1px solid #444"
  };

  const innerCircleStyle = {
    width: 80,
    height: 80,
    borderRadius: "50%",
    background: "green"
  };

  const handleClick = event => {
    console.log("Clicked");
  };

  return (
    <div onClick={handleClick} style={outerCircleStyle}>
      {isSwitchedOn === true ? <div style={innerCircleStyle}></div> : null}
    </div>
  );
};

export default Toggle;
