const Joi = require('joi');

// Schema member
const memberSchema = Joi.object({
  create: Joi.object({
    phone: Joi.string()
      .pattern(/^\d{10,11}$/).required(),
    bio: Joi.string().min(3).max(255).required(),
    isAdmin: Joi.boolean().required()
  }).required()
});

// Schema client
const clientSchema = Joi.object({
  create: Joi.object({
    isActive: Joi.boolean().default(true),
    birthday: Joi.date().less("now").required(),
    height: Joi.number().precision(2).positive().required(),
    weight: Joi.number().precision(2).positive().required()
  }).required()
});

// Schema base
const addNewUser = Joi.object({
  firstName: Joi.string().min(3).max(50).required(),
  lastName: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),

  member: memberSchema,
  client: clientSchema
});

module.exports = {
  addNewUser
}