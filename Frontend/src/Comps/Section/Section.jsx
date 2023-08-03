import React, { useEffect, useState } from "react";
import axios from "axios";

//import components
import section from "./section.css";
import Tasklist from "./TaskList/Tasklist";

import { baseUrl } from "../../App";
import { useDispatch } from "react-redux";
import { setToastState } from "../../Redux/toastSlice";

function Section() {
  const [tasks, setTasks] = useState([]);
  const dispatch = useDispatch();

  const removeToast = (dealy, callback) => {
    const timeoutId = setTimeout(() => {
      dispatch(
        setToastState({
          isVisiable: false,
        })
      );
      clearTimeout(timeoutId);
      //if callback exist than call this function
      if (callback) {
        callback();
      }
    }, dealy);
  };

  const failedToast = (errMsg) => {
          //shwo failed toast
          dispatch(
            setToastState({
              isVisiable: true,
              type: "Error",
              title: "Failed",
              subtitle: errMsg//err.response.data.response,
            })
          );
  }


  useEffect(() => {
    const fatchData = async () => {
      try {
        const response = await axios.get(baseUrl + "/tasks");
        setTasks(response.data.response);
      } catch (err) {
        failedToast(err.response == undefined ? err.message : err.response.data.response);
        removeToast(1500);
      }
    };

    fatchData();
  }, []);
  return (
      <section className="sectionDiv">
      <div style={{display : tasks.length == 0 ? "flex" : "none"}} className="loaderParent">
         <div className="loaderChild"></div>
      </div>
         {
          tasks.map((value, index) => <Tasklist key={index} title={value.title} description={value.description} status = {value.status} date = {value.date} id = {value._id}/>)
         }
      </section>
  );
}

export default Section;
