const Joi = require('joi');

// exports.filterJsonValidator = Joi.object({
//   payload: Joi.array().min(1).items().required()
// }).required();

// exports.filterJsonValidator = Joi.object({
//   payload: Joi.array().min(1).items({address: Joi.object().required()}).required()
// });

exports.filterJsonValidator = Joi.object({
    payload: Joi.array().min(1).items({address: Joi.object().required()}).required()
  }).required();