const accommodationStatuses = require('../data/accommodationStatuses')
const AccommodationStatus = require('../models/AccommodationStatus')

module.exports = {
    seedAccommodationStatuses: async() => {
        console.log('Began seeding accommodation statuses into the database')
        if (await AccommodationStatus.isCollectionEmpty()) {
            for (const accommodationStatus of accommodationStatuses) {
                try {
                    const accommodationStatusToCreate = new AccommodationStatus(accommodationStatus)
                    await accommodationStatusToCreate.save()
                } catch (ex) {
                    console.log("An error occurred while saving accommodation statuses")
                }
            }
        }
        console.log('Finished seeding accommodation statuses into the database')
    }
}