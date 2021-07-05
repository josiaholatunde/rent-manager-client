const AccommodationStatusService = require('../services/AccommodationStatusService')
const ResponseService = require('../services/ResponseService')

module.exports = {
    getAccommodationStatuses: async(req, res, next) => {

        try {
            const accommodationStatuses = await AccommodationStatusService.getAll();
            return ResponseService.send(201, res, 'Successfully fetched accommodationStatuses', accommodationStatuses, null)
        } catch (err) {
            console.log(err);
            return ResponseService.send(500, res, 'An error occurred while fetching accommodation statuses', null, {
                msg: err
            })
        }
    }
}