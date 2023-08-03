import { createSlice } from "@reduxjs/toolkit";

export const taskDialogSlice = createSlice({
   name : "taskDialog",
   initialState : {
     isVisiable : false,
     dialogTitle : "",
     dialogDescription : "",
     taskStatus : "",
     taskDate : "",
     taskId : ""
   },
   reducers : { 
      setTaskDialogState : (state, action) => {
        const actionsValue = action.payload;
        const newObj = { ...state, ...actionsValue };
        return newObj;
      }
   }
});

export const { setTaskDialogState } = taskDialogSlice.actions;
export default taskDialogSlice.reducer;