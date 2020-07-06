import React from "react";

const WallPaper = ({ img, dimensions }) => {
  return (
    <div>
      <img src={img} alt="Wallpaper" style={dimensions} />
    </div>
  );
};

export default WallPaper;
