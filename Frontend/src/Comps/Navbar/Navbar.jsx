import React from "react";
import navbar from "./navbar.css";

import { useNavigate } from "react-router-dom";

import { setIsNewTask } from "../../Redux/isNewTaskSlice";
import { useDispatch } from "react-redux";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const taskBtnHandler = () => {
    dispatch(setIsNewTask(true));
    navigate('/edittask');
  }
  return (
    <div className="navbarDiv">
      <h1>Task Management</h1>
      <button onClick={taskBtnHandler}>Add Task</button>
    </div>
  );
}

export default Navbar;
