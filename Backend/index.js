import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv/config';
import bodyParser from 'body-parser';

import { connectDb } from './database/database.js';
import taskRouter from './router/taskRouter.js';

const app = express();
connectDb(); //connect to the database

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use('/', taskRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('Server is running at port ' + PORT));
