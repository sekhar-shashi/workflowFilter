const Joi = require('joi');

const schema = {
  address: Joi.object().required()
}
exports.filterJsonValidator = Joi.object({
  payload: Joi.array().items(schema)
});
