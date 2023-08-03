import React from "react";
import progress from "./progress.css";
import { useSelector } from "react-redux";

function Progress() {
  const progressBarState = useSelector((state) => state.progress);
  return (
    <div style={{display : progressBarState? "flex" : "none"}} className="loadingMain">
      <div className="loadingChild"></div>
    </div>
  );
}

export default Progress;
