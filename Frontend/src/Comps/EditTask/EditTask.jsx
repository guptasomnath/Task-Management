import React, { useState } from "react";
import edittask from "./edittask.css";
import { baseUrl } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { setToastState } from "../../Redux/toastSlice";
import { setProgressState } from "../../Redux/progressSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage, connect } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  taskTitle: Yup.string().required("Task title is required"),
  taskDescription: Yup.string().required("Task description is required"),
});

function EditTask() {
  const navigate = useNavigate();
  const state = useSelector((state) => state.taskDialog);
  const isNewTask = useSelector((state) => state.isNewTask);

  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState(
    state.taskStatus || "Pending"
  );

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
  
  const successToast = (msg) => {
      //show success toast
      dispatch(
        setToastState({
          isVisiable: true,
          type: "Success",
          title: "Success",
          subtitle: msg,
        })
      );

  }

  const selectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const getCurrentDate = () => {
    const currentDate = new Date();

    // Define options for formatting the date
    const options = {
      day: "numeric",
      month: "short",
      year: "numeric",
    };

    // Format the date using toLocaleString method
    const formattedDate = currentDate.toLocaleString("en-US", options);
    return formattedDate;
  };

  const postRequest = async (values) => {
    dispatch(setProgressState(true)); //show progress bar
    //if add new task then hit /newtask else hit /updatetasks endpoint
    const postEndpoint = isNewTask ? "/newtask" : `/updatetasks/${state.taskId}`;

    try {
      const response = await axios.post(baseUrl + postEndpoint, {
        title: values.taskTitle,
        description: values.taskDescription,
        status: selectedOption,
        date: getCurrentDate(),
      });
      successToast(response.data.response);
      removeToast(1500, () => {
        navigate("/");
      });
    } catch (error) {
      failedToast(error.response == undefined ? error.message : error.response.data.response);
      removeToast(1500);
    }

    dispatch(setProgressState(false)); //hide progress bar

  };

  const deleteTaskBtnClicked = async () => {
    dispatch(setProgressState(true)); //show progress bar
    try {
      const res = await axios.post(baseUrl + `/deletetask/${state.taskId}`);
      successToast(res.data.response);
      //after some time remove toast and do whatever you want inside callback
      removeToast(1500, () => {
        navigate("/");
      });
    } catch (err) {
      failedToast(err.response == undefined ? err.message : err.response.data.response);
      //after some time remove toast
      removeToast(1500);
    }

    dispatch(setProgressState(false)); //hide progress bar
  };

  return (
    <div>
      <Formik
        initialValues={{
          taskTitle: isNewTask == true ? "" : state.dialogTitle,
          taskDescription: isNewTask == true ? "" : state.dialogDescription,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          // Handle form submission here
          postRequest(values);
          setSubmitting(false);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="editTaskDiv">
            <div>
              <Field
                type="text"
                id="taskTitle"
                name="taskTitle"
                placeholder="Enter task title"
              />
              <ErrorMessage
                name="taskTitle"
                component="div"
                className="error"
              />
            </div>
            <div>
              <Field
                as="textarea"
                rows="4"
                cols="50"
                id="taskDescription"
                name="taskDescription"
                placeholder="Enter task description"
              />
              <ErrorMessage
                name="taskDescription"
                component="div"
                className="error"
              />
            </div>
            <div className="taskStatusSelectorDiv">
              <label>Task Status</label>
              <select value={selectedOption} onChange={selectChange}>
                <option name="Pending">Pending</option>
                <option name="Complete">Complete</option>
              </select>
            </div>
            <button className="submitBtn" type="submit" disabled={isSubmitting}>
              Submit
            </button>
            <button
              onClick={deleteTaskBtnClicked}
              style={{ display: isNewTask == true ? "none" : "block" }}
              className="deleteBtn"
              type="button"
            >
              Delete
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EditTask;
