const { check } = require("express-validator");

module.exports = {
    registrationValidator: () => [
        check("fullName", 'The field first name is required').not().isEmpty().isLength({ min: 3 }),
        check("userName", 'The field last name is required').not().isEmpty().isLength({ min: 5 }),
        check("password", 'The password field is required and should have a minimum of 7 characters').not().isEmpty().isLength({ min: 7 }),
    ]
}