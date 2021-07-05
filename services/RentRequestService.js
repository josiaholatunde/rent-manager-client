const RentRequest = require('../models/RentRequest')

const DEFAULT_INTEREST_PERCENTAGE = 2;

const computeMonthlyPayment = (requestAmount, paymentPlan) => {
    const monthlyPayment = requestAmount / paymentPlan;
    const interestPercentage = (process.env.MONTHLY_INTEREST || DEFAULT_INTEREST_PERCENTAGE) + 100;
    const totalMonthlyPayment = (interestPercentage * monthlyPayment) / 100;
    return totalMonthlyPayment
}
module.exports = {
    save: async(payload) => {
        try {
            const monthlyAmount = computeMonthlyPayment(payload.requestAmount, payload.paymentPlan)
            const rentRequest = new RentRequest({...payload, monthlyAmount });
            return await rentRequest.save();
        } catch (ex) {
            console.log(err);
            throw ex;
        }
    }
}