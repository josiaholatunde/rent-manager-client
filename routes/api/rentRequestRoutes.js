const { registerUser, loginUser } = require('../../controllers/AuthController')
const { registrationValidator, loginValidator } = require('../../validators/authValidator')
const authMiddleware = require('../../middlewares/auth')

const rentRequestRoutes = (app) => {

    app.post('/api/v1/rent-request', [
        authMiddleware,
        registrationValidator(),
    ], registerUser);
}

module.exports = rentRequestRoutes;