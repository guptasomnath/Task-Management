import { configureStore } from '@reduxjs/toolkit';
import taskDialogReducer from './taskDialogSlice';
import isNewTaskReducer from './isNewTaskSlice';
import toastReducer from './toastSlice';
import progressReducer from './progressSlice';

export const store = configureStore({
  reducer: {
    taskDialog : taskDialogReducer,
    isNewTask : isNewTaskReducer,
    toast : toastReducer,
    progress : progressReducer
  },
})