const { createRentRequest } = require('../../controllers/RentRequestController')
const { rentRequestValidator } = require('../../validators/rentRequestValidator')
const authMiddleware = require('../../middlewares/auth')

const rentRequestRoutes = (app) => {

    app.post('/api/v1/rent-request', [
        authMiddleware,
        rentRequestValidator(),
    ], createRentRequest);
}

module.exports = rentRequestRoutes;