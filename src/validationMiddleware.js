// src/validationMiddleware.js

const Joi = require('joi');

// Validation middleware for creating transactions
exports.validateTransaction = (req, res, next) => {
    const schema = Joi.object({
        amount: Joi.number().required(),
        currency: Joi.string().required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
};
