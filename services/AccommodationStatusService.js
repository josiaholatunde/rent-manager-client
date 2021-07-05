const AccommodationStatus = require('../models/AccommodationStatus')


module.exports = {
    getAll: async function() {
        try {
            const accommodationStatuses = await AccommodationStatus.find({});
            return accommodationStatuses;
        } catch (err) {
            console.log(err);
            return [];
        }
    },

}