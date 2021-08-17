const Joi = require('joi');

const middleware = (schema, property) => {
    return (req, res, next) => {
        const { error } = schema.validate(req[property]);
        const valid = error == null;

        if(valid)
        {
            next();
        }
        else{
            const{ details } = error;
            const message = details.map(i => i.message).join(',');

            console.log("error", message);
            res.status(400).json({error: message});
        }
    }
}

module.exports = middleware;