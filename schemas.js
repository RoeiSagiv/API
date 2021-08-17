const Joi = require('joi');
const schemas = {
    query_params: Joi.object().keys({
        name: Joi.string().min(3).required(),
        birth_year: Joi.string().length(4).required()
    })
}

module.exports = schemas;