const mongoose = require("mongoose");
const { Schema } = mongoose;

const RoleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    }
});

RoleSchema.statics.isRolesCollectionEmpty = async function() {
    const noOfRolesInDb = await this.find();
    return noOfRolesInDb.length === 0

}


RoleSchema.statics.getRoleById = async function(roleId) {
    return !!await this.findOne({ _id: roleId })
}

RoleSchema.statics.getDefaultRole = async function() {
    return await this.findOne({ code: 'default' });
}

module.exports = mongoose.model("Role", RoleSchema);