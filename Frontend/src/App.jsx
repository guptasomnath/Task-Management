import "./App.css";
import React, {useEffect} from "react";
//import components
import Navbar from "./Comps/Navbar/Navbar";
import Section from "./Comps/Section/Section";
import EditTask from "./Comps/EditTask/EditTask";
import TaskDialog from "./Comps/TaskDialog/TaskDialog";
import Toast from './Comps/Toast/Toast';
import Progress from "./Comps/Progress/Progress";
import { Routes, Route } from "react-router-dom";

export const baseUrl = "https://task-management-brown.vercel.app"; //"http://localhost:8080";
 
function App() {
  useEffect(()=>{
    document.documentElement.style.setProperty('--mainLayoutHeight--', window.innerHeight + "px");
  },[]);
  addEventListener('resize', () => {
    document.documentElement.style.setProperty('--mainLayoutHeight--', window.innerHeight + "px");
  })
  return (
    <div className="App">
      <TaskDialog />
      <Toast />
      <Progress />
      <Navbar />
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/edittask" element={<EditTask />} />
      </Routes>
    </div>
  );
}

export default App;
