import React from "react";
import tasklist from "./tasklist.css";
import { useDispatch } from "react-redux";
import { setTaskDialogState } from "../../../Redux/taskDialogSlice";
import { setIsNewTask } from "../../../Redux/isNewTaskSlice";

function Tasklist({ title, description, status, date, id }) {
 const dispatch = useDispatch();
 const onListItemClicked = () => {
  dispatch(setIsNewTask(false));
  dispatch(setTaskDialogState({
    isVisiable : true,
    dialogTitle : title,
    dialogDescription : description,
    taskStatus : status,
    taskDate : date,
    taskId : id
  }))
 }

 const statusLblColor = {
   backgroundColor : status == "Complete" ? "green" : "yellow",
   color : status == "Complete" ? "white" : "black"
 }
  return (
    <div onClick={onListItemClicked} className="taskListDiv">
      <div className="taskHeader">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="taskFooter">
        <label>{date}</label>
        <div style={statusLblColor} className="taskStatus">{status}</div>
      </div>
    </div>
  );
}

export default Tasklist;
