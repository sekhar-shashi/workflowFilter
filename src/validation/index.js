const Joi = require('joi');

exports.filterJsonValidator = Joi.object().keys({
  payload: Joi.array().min(1).required()
}).required();
