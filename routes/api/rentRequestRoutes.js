const { createRentRequest, getRentRequest } = require('../../controllers/RentRequestController')
const { rentRequestValidator } = require('../../validators/rentRequestValidator')
const authMiddleware = require('../../middlewares/auth')

const rentRequestRoutes = (app) => {

    app.post('/api/v1/rent-request', [
        authMiddleware,
        rentRequestValidator(),
    ], createRentRequest);

    app.get('/api/v1/rent-request/:id', [
        authMiddleware,
    ], getRentRequest);
}

module.exports = rentRequestRoutes;