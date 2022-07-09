import Joi from 'joi';

const age = Joi
  .number()
  .required();

const name = Joi
  .string()
  .required()
  .min(3)
  .max(15);

const createUserSchema = Joi.object({
  name,
  age,
});

export default createUserSchema;