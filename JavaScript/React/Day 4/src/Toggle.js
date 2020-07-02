import React from "react";

const Toggle = ({ isSwitchedOn = false, customOnClick }) => {
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

  let storeEve = null;
  const handleClick = () => {
    // storeEve = event;
    // console.log("Event happening", storeEve.target);
    // setTimeout(function () {
    //   console.log("Event finished", storeEve.target);
    // }, 1000);
    customOnClick(isSwitchedOn);
  };

  let innerCircleComponent = null;
  if (isSwitchedOn === true) {
    innerCircleComponent = <div style={innerCircleStyle}></div>;
  }
  return (
    <div onClick={handleClick} style={outerCircleStyle}>
      {innerCircleComponent}
    </div>
  );
};

export default Toggle;
