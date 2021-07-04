const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Schema } = mongoose
const jwtSecret = process.env.JWT_SECRET
const userVerificationStatuses = require('../data/userVerificationStatuses')

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
    },
    password: {
        type: String,
    },
    isAccountConfirmed: {
        type: Boolean,
        default: false
    },
    roleId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Role'
    },
    verificationStatus: {
        type: String,
        lowercase: true,
        default: userVerificationStatuses.unVerified,
        validate(value) {
            if (!Object.values(userVerificationStatuses).includes(value.toLowerCase())) {
                throw new Error('Invalid user verification status')
            }
        }
    },
})

// To hide password in any user instance
UserSchema.methods.toJSON = function() {
    const user = this;
    const userObject = user.toObject()

    delete userObject.password

    return userObject
}

UserSchema.statics.doesUserExistInDatabase = async function(userName) {
        try {
            const user = await this.findOne({ userName });
            return !!user;
        } catch (err) {
            console.log(err);
            return false;
        }
    },


    UserSchema.statics.hashUserPassword = async function(password) {
        try {
            const salt = await bcrypt.genSalt(10);
            return await bcrypt.hash(password, salt);
        } catch (err) {
            console.log('An error occurred while hashing user password' + err);
            throw err;
        }
    }


UserSchema.methods.generateToken = async function() {
    try {
        const userPayload = {
            id: this._id,
            email: this.email,
            roleId: this.roleId,
            fullName: `${this.firstName} ${this.lastName}`
        }
        const token = await jwt.sign(userPayload, jwtSecret, { expiresIn: process.env.TOKEN_EXPIRY || '1h' })
        return token;
    } catch (err) {
        console.log(err);
        return null;
    }
}


module.exports = mongoose.model('User', UserSchema)