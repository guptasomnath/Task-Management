import mongoose, { Schema } from "mongoose";
import dotenv from 'dotenv/config.js';

export const connectDb = async () => {
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("Database Connected");
    }catch(err){
        console.log({message : 'Database not connected', error : err});
    }
    
}

const DBSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
  
    description: {
      type: String,
      required: true,
    },

    status: {
        type: String,
        required: true,
    },

    date: {
        type: String,
        required: true,
    }
});

export const TaskManager = mongoose.model("taskmanager", DBSchema);