const roles = require('../data/roles')
const Role = require('../models/Role')

module.exports = {
    seedDatabaseWithRoles: async() => {
        console.log('Began seeding roles into the database')
        if (await Role.isRolesCollectionEmpty()) {
            for (const role of roles) {
                try {
                    const roleToCreate = new Role(role)
                    await roleToCreate.save()
                } catch (ex) {
                    console.log("An error occurred while saving roles")
                }
            }
        }
        console.log('Finished seeding roles into the database')
    }
}