import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTaskDialogState } from "../../Redux/taskDialogSlice";

import taskdialog from "./taskdialog.css";

//import images
import editIcon from "./edit.png";
import closeIcon from "./close.png";

function TaskDialog() {
  const navigate = useNavigate()
  const taskDialogState = useSelector((state) => state.taskDialog); //get taskDialogRedux data
  const taskDialogStateSet = useDispatch();
  const onCloseIconClick = () => {
    taskDialogStateSet(setTaskDialogState({
      isVisiable : false
    }))
  }

  const onEditIconClick = () => {
    taskDialogStateSet(setTaskDialogState({
      isVisiable : false,
    }))
    navigate('/edittask');
  }

  return (
    <div
      style={{ display: taskDialogState.isVisiable == true ? "flex" : "none" }}
      className="taskDialog"
    >
      <div className="mainDialogBody">
        <div className="dialogHead">
          <h1>{taskDialogState.dialogTitle}</h1>
          <div className="iconsDiv">
            <img onClick={onEditIconClick} src={editIcon} />
            <img onClick = {onCloseIconClick} src={closeIcon} />
          </div>
        </div>
        <div className="dialogSection">
          <p>{taskDialogState.dialogDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskDialog;
