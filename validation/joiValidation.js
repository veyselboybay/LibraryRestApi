const joi = require("joi");

const userSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
});

const loginSchema = joi.object({
  email: joi.string().required().email(),
  password: joi.string().min(8).required(),
});

module.exports = { userSchema, loginSchema };
