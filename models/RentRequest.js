const mongoose = require("mongoose");
const { Schema } = mongoose;

const RentRequestSchema = new Schema({
    requestAmount: {
        type: Number,
        required: true
    },
    salaryAmount: {
        type: String,
        required: true
    },
    paymentPlan: {
        type: Number,
        required: true
    },
    monthlyAmount: {
        type: Number,
        required: true
    },
    requester: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    isApproved: {
        type: Boolean,
        default: false
    },
});

RentRequestSchema.statics.isCollectionEmpty = async function() {
    const noOfRecordsInDb = await this.find();
    return noOfRecordsInDb.length === 0
}



module.exports = mongoose.model("RentRequest", RentRequestSchema);