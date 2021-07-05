const { getAccommodationStatuses } = require('../../controllers/AccommodationStatusController')

const rentRequestRoutes = (app) => {

    app.get('/api/v1/accommodation-status',
        getAccommodationStatuses);
}

module.exports = rentRequestRoutes;