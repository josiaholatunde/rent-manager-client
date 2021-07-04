const { validationResult } = require("express-validator");
const Role = require('../models/Role');
const User = require('../models/User');
const ResponseService = require('../services/ResponseService')

module.exports = {
    registerUser: async(req, res, next) => {
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
            const { userName } = req.body
            if (await User.doesUserExistInDatabase(userName)) {
                return ResponseService.send(400, res, 'User with the same username already exists', null, {
                    msg: 'User with the same username already exists'
                })
            }

            const defaultRole = await Role.getDefaultRole();
            if (!defaultRole) {
                throw new Error("Default role does not exist");
            }
            let user = new User({...req.body, roleId: defaultRole._id });
            user.password = await User.hashUserPassword(user.password);
            const createdUser = await user.save();
            createdUser.password = null;

            // const registrationConfig = await getRegistrationMailCOnfig(createdUser);
            // const sentMail = await emailService.sendMail(registrationConfig)
            // if (sentMail) {
            //     console.log(`Successfully sent mail to User ${email}`);
            // }
            return ResponseService.send(201, res, 'Successfully created new user', createdUser, null)
        } catch (err) {
            console.log(err);
            return ResponseService.send(500, res, 'An error occurred while registering user', null, {
                msg: err
            })
        }
    }
}