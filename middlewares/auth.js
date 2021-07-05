const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET
const User = require('../models/User');
const ResponseService = require('../services/ResponseService');

module.exports = async(req, res, next) => {
    try {
        const token = req.header('Authorization') && req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, jwtSecret);
        const _id = decoded.id;

        const user = await User.findOne({ _id });

        if (!user) {
            return ResponseService.send(401, res, 'User is unauthorized to visit this route!', null, {
                msg: 'Unauthorized action'
            })
        }

        req.token = token;
        req.user = user;
        next();

    } catch (err) {
        console.log(err)
        return ResponseService.send(401, res, 'An error occurred during the user verification process', null, {
            msg: err
        })
    }
}