const { body, validationResult } = require('express-validator');

const validateUser = [
    body("email").isEmail().withMessage({
        field: "email",
        message: "email is not valid",
    }),

    body("password").isLength().withMessage({
        field: "password",
        message: "password is incorrect",
    })
];

const validate = (req, res, next) => {

    let errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    return next();

};

module.exports = { validate, validateUser }