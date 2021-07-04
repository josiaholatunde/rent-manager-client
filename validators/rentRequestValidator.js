const { check } = require("express-validator");

module.exports = {
    rentRequestValidator: () => [
        check("requestAmount", 'The field first name is required').not().isEmpty().isNumeric(),
        check("salaryAmount", 'The field salaryAmount is required').not().isEmpty().isNumeric(),
        check("paymentPlan", 'The field paymentPlan is required').not().isEmpty().isNumeric(),
        check("requester", 'The requester field is required').not().isEmpty(),
    ]
}