const { validationResult } = require("express-validator");
const RentRequest = require('../models/RentRequest');
const UserService = require('../services/UserService')
const RentRequestService = require('../services/RentRequestService')
const ResponseService = require('../services/ResponseService')

module.exports = {
    createRentRequest: async(req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return ResponseService.send(
                422,
                res,
                "One or more validation errors occurred",
                null,
                errors.array({ onlyFirstError: true })
            );
        }
        try {
            //include transactions
            const { requester } = req.body
            if (await UserService.findById(requester)) {
                return ResponseService.send(403, res, 'Invalid requester', null, {
                    msg: 'Invalid requester'
                })
            }

            const createdRentRequest = await RentRequestService.save(req.body);

            return ResponseService.send(201, res, 'Successfully created new rent request', rent, createdRentRequest)
        } catch (err) {
            console.log(err);
            return ResponseService.send(500, res, 'An error occurred while creating rent request', null, {
                msg: err
            })
        }
    }
}