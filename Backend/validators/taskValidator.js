import Joi from 'joi';


export const createAndUpdateTaskSchema = Joi.object({
    title : Joi.string().required(),
    description : Joi.string().required(),
    status : Joi.string().required(),
    date : Joi.string().required()
})

export const deleteTaskSchema = Joi.object({
    id: Joi.string().required()
});