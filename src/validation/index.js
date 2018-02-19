const Joi = require('joi');

exports.filterJsonValidator = Joi.object({
  payload: Joi.array().items(Joi.object()).default([]).required()
});