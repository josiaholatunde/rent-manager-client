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
            if (!await UserService.findById(requester)) {
                return ResponseService.send(400, res, 'Invalid requester', null, {
                    msg: 'Invalid requester'
                })
            }

            const createdRentRequest = await RentRequestService.save(req.body);
            return ResponseService.send(201, res, 'Successfully created new rent request', createdRentRequest, null)
        } catch (err) {
            console.log(err);
            return ResponseService.send(500, res, 'An error occurred while creating rent request', null, {
                msg: err
            })
        }
    },
    getRentRequest: async(req, res, next) => {

        try {
            const id = req.params.id;
            if (!id) {
                return ResponseService.send(400, res, 'Invalid request params', null, {
                    msg: 'Invalid request params'
                })
            }
            const rentRequest = await RentRequest.findOne({ _id: id });
            if (!rentRequest) {
                return ResponseService.send(404, res, 'Rent request does not exist', null, {
                    msg: 'Rent request does not exist'
                })
            }
            return ResponseService.send(200, res, 'Successfully fetched rent request', rentRequest, null)
        } catch (err) {
            console.log(err);
            return ResponseService.send(500, res, 'An error occurred while fetching rent request', null, {
                msg: err
            })
        }
    }
}