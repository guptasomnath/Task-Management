import express from 'express';
import { getAllTasks, addNewTask, updateAllTask, deleteTask } from '../controllers/taskControllers.js';
const taskRouter = express.Router();

taskRouter
    .get('/tasks', getAllTasks)
    .post('/deletetask/:id', deleteTask)
    .post('/newtask', addNewTask)
    .post('/updatetasks/:id', updateAllTask)

export default taskRouter;