const Joi = require("joi")

const usersValidator = Joi.object({
  name: Joi.string().required().min(1),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6).max(30),
});

module.exports = { usersValidator }