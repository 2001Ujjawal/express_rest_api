const Joi = require("joi");

const registerSchema = Joi.object({
  name: Joi.string().trim().min(3).required().messages({
    "string.empty": "Name is required",
    "string.min": "Name must be at least 3 characters",
    "any.required": "Name is required",
  }),

  email: Joi.string().trim().email().required().messages({
    "string.email": "Invalid email format",
    "string.empty": "Email is required",
    "any.required": "Email is required",
  }),

  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be at least 6 characters",
    "string.empty": "Password is required",
    "any.required": "Password is required",
  }),

  mobile: Joi.string()
    .trim()
    .pattern(/^[6-9]\d{9}$/)
    .required()
    .messages({
      "string.pattern.base": "Enter valid 10-digit mobile number",
      "string.empty": "Mobile number is required",
      "any.required": "Mobile number is required",
    }),
});

const addUserDetailsSchema = Joi.object({
  user_id: Joi.string().trim().required().messages({
    "string.empty": "user_id is required",
  }),
  address: Joi.string().trim().required().messages({
    "string.empty": "address is required",
  }),
  phone: Joi.string().trim().required().messages({
    "string.empty": "address is required",
  }),
  secondAddress: Joi.string().trim().required().messages({
    "string.empty": "address is required",
  }),
});
module.exports = { registerSchema, addUserDetailsSchema };
