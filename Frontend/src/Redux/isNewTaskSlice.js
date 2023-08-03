import { createSlice } from "@reduxjs/toolkit";

export const isNewTaskSlice = createSlice({
   name : "isNewTask",
   initialState : true,
   reducers : { 
      setIsNewTask : (state, action) => {
         return action.payload;
      }
   }
});

export const { setIsNewTask } = isNewTaskSlice.actions;
export default isNewTaskSlice.reducer;