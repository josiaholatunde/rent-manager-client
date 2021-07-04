const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWT_SECRET

module.exports = {
    getUserFromDb: async function(userName) {
        try {
            const userFromDb = await User.findOne({ userName });
            return userFromDb;
        } catch (err) {
            console.log(err);
            return null;
        }
    },
    findById: async function(userId) {
        try {
            const userFromDb = await User.findById(userId);
            return userFromDb;
        } catch (err) {
            console.log(err);
            return null;
        }
    },
    doesUserPasswordMatchThatInDb: async function(passwordToCompareAgainst, passwordFromDb) {
        try {
            return await bcrypt.compare(passwordToCompareAgainst, passwordFromDb);
        } catch (err) {
            console.log(err);
            return false;
        }
    },
    createNewUser: async function(user) {
        try {
            const userFromDb = await new User({...user }).save();
            return userFromDb;
        } catch (err) {
            console.log(err);
            return null;
        }
    },
    generateToken: async function(user) {
        try {
            const userPayload = {
                id: user._id,
                userName: user.userName,
                fullName: user.fullName
            }
            const token = await jwt.sign(userPayload, jwtSecret, { expiresIn: process.env.TOKEN_EXPIRY || '1h' })
            return token;
        } catch (err) {
            console.log(err);
            return null;
        }
    },
    isUserPasswordSameAsBefore: async(previousPassword, newPassword) => {
        return previousPassword === newPassword;
    }
}