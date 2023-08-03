import React from "react";
import toast from "./toast.css";

//import icons
import successIcon from "./successIcon.png";
import errorIcon from "./errorIcon.png";
import warningIcon from "./warningIcon.png";
import { useSelector } from "react-redux";

function Toast() {
  const toastState = useSelector((state) => state.toast);
  const leftDivColor = {
    backgroundColor : toastState.type == "Success" ? "#2ccc63" : toastState.type == "Error"? "rgb(209, 23, 23)" : "yellow"
  }
  return (
    <div style={{display : toastState.isVisiable? "flex" : "none"}} className="tostBackground">
      <div className="tostDiv">
        <div style={leftDivColor} className="leftColor">d</div>
        <div className="tostDetailsDiv">
          <img src={toastState.type == "Success" ? successIcon : toastState.type == "Error"? errorIcon : warningIcon} />
          <div className="tostTexts">
            <h1>{toastState.title}</h1>
            <p>{toastState.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toast;
