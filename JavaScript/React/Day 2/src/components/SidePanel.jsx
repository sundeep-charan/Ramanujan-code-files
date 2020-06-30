import React from "react";
import HelpForm from "./HelpForm";
import WallPaper from "./WallPaper";

import "../styles/SidePanel.css";

const SidePanel = () => (
  <div className="SidePanel">
    <HelpForm />
    <WallPaper
      img={`https://images.unsplash.com/photo-1593073862407-a3ce22748763?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80`}
      dimensions={{ width: "200px", height: "150px" }}
    />
  </div>
);

export default SidePanel;
