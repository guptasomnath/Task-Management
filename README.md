# Task-Management MERN stack project

# Technology Used
- React js, Redux, Formik,
- Node js, Express js, Joi,
- MongoDB

- Vercel Cloud For Backend API,
- Netlify Cloud For Frontend.

## Features

- Add, Update, Remove Tasks
- Animated Success or Error Dialog
- Browser Compatible
- New Task Will Appear First Index


# Backend API Documentation
  **--Get All Tasks Api--**
  
      EndPoint :- "/tasks", (ex: API_URL/tasks)
      Method : GET,

      Response If Failed:- statusCode(400)
      {
        isSuccess: false,
        message: "Failed Message"
      }

      Response If Success:- statusCode(200)
      {
        isSuccess: true,
        response: {
          title : "Task title",
          description : "Task description",
          status : "Task status",
          date : "Task Public Date",
          _id : "Taks id"
        }
      }

  **--Add New Task--**

    EndPoint :- "/newtask", (ex: API_URL/newtask)
    Method : POST,
    Body Params : title, description, status, date

    Response If Failed : - statusCode(400)
    {
      isSuccess: false,
      message: Failed-Message
    }

    Response If Success:- statusCode(200)
    {
        isSuccess: true,
        message: "Task Added Successfully"
    }

  **--Delete Task Api--**
  
      EndPoint :- "/deletetask/:id", (ex: API_URL/deletetask/B7Tai4D5E4f6E)
      Method : POST,

      Response If Failed : - statusCode(400)
       { 
          isSuccess: false,
          message: Failed-Message
       }

      Response If Success:- statusCode(200)
       {
          isSuccess: true,
          message: `Task Deleted Successfully`,
       }


   **--Update Task Api--**
   
       EndPoint :- "/updatetasks/:id", (ex: API_URL/updatetasks/B7Tai4D5E4f6E)
       Method : POST,
       Body Params : title, description, status, date

       Response If Failed : - statusCode(400)
       { 
          isSuccess: false,
          message: Failed-Message
       }

        Response If Success:- statusCode(200)
        {
            isSuccess: true,
            message: "Task updated successfully"
        } 


# Demo :-
https://guileless-yeot-d0af99.netlify.app/
