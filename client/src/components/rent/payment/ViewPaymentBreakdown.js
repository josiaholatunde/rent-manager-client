import React from 'react'
import currencyFormatter from '../../../util/currencyFormatter'
import { connect, useDispatch, useSelector } from 'react-redux';
import { handleRentRequest } from '../../../redux/actions/rentActions' 
import { withRouter } from "react-router-dom";
import Spinner from '../../layout/Spinner'
import '../CreateRentRequest.scss'
import './PaymentBreakdown.scss'

const ViewPaymentBreakdown = ({ 
    history,
    salaryAmount,
    requestAmount, paymentPlan, handleRequestAmount,  
    handlePaymentPlan, handleShouldDisplayPaymentBreakDown }) => {

    const dispatch = useDispatch();

    const { loading, rentRequest: { createdRentRequest} } = useSelector(state => state);

    const computeMonthlyPayment = (requestAmount, paymentPlan) => {
        const monthlyPayment = requestAmount / paymentPlan;
        const interestPercentage =  (process.env.MONTHLY_INTEREST || DEFAULT_INTEREST_PERCENTAGE) + 100;
        const totalMonthlyPayment = (interestPercentage * monthlyPayment) / 100;
        return currencyFormatter(totalMonthlyPayment)
    }

    return loading ? <Spinner /> :  (<div className ="card p-3">
                    <div className='card-body'>
                            <div class='d-flex justify-content-between'>
                                <h5 className='text-dark-purple'>Payment Breakdown</h5>
                                <label>Status : <div>{computeStatus(createdRentRequest.isApproved)}</div></label>
                            </div>
                            <div className='form-group my-3'>
                                <label>Rent request amount ?</label>
                                <div> { createdRentRequest && createdRentRequest.requestAmount } </div>
                            </div>

                            <div className='form-group my-3'>
                                <label>Monthly payment plan ?</label>
                                <div> { createdRentRequest && createdRentRequest.paymentPlan } months </div>
                            </div>

                            <div className='form-group my-3'>
                                <label>Payment Option </label>
                                <div className='card light-purple payment-option-card p-3'>
                                    <div className='d-flex justify-content-between'>
                                        <div> Pre-approved amount</div>
                                        <div> { currencyFormatter(createdRentRequest && createdRentRequest.requestAmount) } </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div> Monthly Payment</div>
                                        <div> { computeMonthlyPayment(createdRentRequest.monthlyAmount) } </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div> Tenor</div>
                                        <div>  { createdRentRequest && createdRentRequest.paymentPlan }{ createdRentRequest && createdRentRequest.paymentPlan === 1 ? ' month' : ' months'} </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
        
                
    );
}

export default connect(null, null)(withRouter(ViewPaymentBreakdown))