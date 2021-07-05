const { seedDatabaseWithRoles } = require('../seeders/RoleSeeder')
const { seedAccommodationStatuses } = require('../seeders/AccommodationStatusSeeder')


module.exports = {
    seedData: async function() {
        try {
            await seedDatabaseWithRoles()
            await seedAccommodationStatuses()
        } catch (err) {
            console.log('An error occurred while seeding database data' + err);
            return null;
        }
    },

}