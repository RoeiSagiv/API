const Joi = require('joi');
const schemas = {
    object1: Joi.object().keys({
        userFullName: Joi.string().min(3).required(),
        userBirthYear: Joi.string().length(4).required()
    })
}

module.exports = schemas;