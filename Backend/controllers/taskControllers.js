import { TaskManager } from "../database/database.js"; //import database module
import {
  createAndUpdateTaskSchema,
  deleteTaskSchema
} from "../validators/taskValidator.js";

export const getAllTasks = async (req, res) => { //get all tasks list
  try {
    const allTasks = await TaskManager.find({});
    if(allTasks.length == 0) return res.status(400).json({ isSuccess: false, response: "No Tasks Found" });

    res.status(200).json({ isSuccess: true, response: allTasks });
  } catch (err) {
    //if any runtime error
    res.status(400).json({ isSuccess: false, response: err });
  }
};

export const addNewTask = async (req, res) => { //create a new task
  //check validation
  const {error} = createAndUpdateTaskSchema.validate(req.body);

//if any error in validation
  if(error){
    return res.status(400).json({isSuccess: false, response : error.details.map(err => err.message)})
  }

//after validation success
  const storeData = new TaskManager({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
    date : req.body.date
  });


  try {
    const response = await storeData.save();
    res
      .status(200)
      .json({ isSuccess: true, response: "Task Added Successfully" });
  } catch (err) {
    //if any runtime error
    res.status(400).json({ isSuccess: false, response: err });
  }
};

export const updateAllTask = async (req, res) => { //update tasks details
  //if id is not in req params
  if(!req.params.id) return res.status(400).json({isSuccess : false, response : "id is required"});

  //check validation
  const { error } = createAndUpdateTaskSchema.validate(req.body);

  //if any error in validation
  if (error) {
    return res
      .status(400)
      .json({
        isSuccess: false,
        response : error.details.map(err => err.message)
      });
  }

//after validation success
  try {
    const response = await TaskManager.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      date : req.body.date
    });
    res
      .status(200)
      .json({ isSuccess: true, response: "Task updated successfully" });
  } catch (err) {
    //if any runtime error
    res.status(400).json({ isSuccess: false, response: err });
  }
};

export const deleteTask = async (req, res) => { //delete task
  //check validation
  const { error } = deleteTaskSchema.validate(req.params);

  //if any error in validation
  if (error) {
    return res.status(400).json({isSuccess: false,response : error.details.map(err => err.message)});
  }
//after validation success
  try {
    const response = await TaskManager.findByIdAndDelete(req.params.id);
    res.status(200).json({ isSuccess: true, response: "Task Deleted Successfully" });
  } catch (err) {
    //if any runtime error
    res.status(400).json({isSuccess : false, response : err})
  }
};
