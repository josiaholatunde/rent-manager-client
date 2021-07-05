const mongoose = require("mongoose");
const { Schema } = mongoose;

const AccommodationStatusSchema = new Schema({
    friendlyName: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    }
});

AccommodationStatusSchema.statics.isCollectionEmpty = async function() {
    const noOfRecordsInDb = await this.find();
    return noOfRecordsInDb.length === 0

}


AccommodationStatusSchema.statics.getById = async function(statusId) {
    return await this.findOne({ _id: statusId })
}



module.exports = mongoose.model("AccommodationStatus", AccommodationStatusSchema);