import React from 'react'
import currencyFormatter from '../../../util/currencyFormatter'
import '../CreateRentRequest.scss'
import './PaymentBreakdown.scss'
import { connect, useDispatch, useSelector } from 'react-redux';
import { handleRentRequest } from '../../../redux/actions/rentActions' 
import { withRouter } from "react-router-dom";
import Spinner from '../../layout/Spinner'

const PaymentBreakdown = ({ 
    salaryAmount,
    requestAmount, paymentPlan, handleRequestAmount,  
    handlePaymentPlan, handleRentRequest , history}) => {

    const dispatch = useDispatch();

    const loading = useSelector(state => state.loading);

    const DEFAULT_INTEREST_PERCENTAGE = 2;
    const submitRentRequest = (event) => {
        event.preventDefault()
        dispatch (handleRentRequest({
            requestAmount,
            paymentPlan,
            salaryAmount
        }, history))
    }


    const computeMonthlyPayment = (requestAmount, paymentPlan) => {
        const monthlyPayment = requestAmount / paymentPlan;
        const interestPercentage =  (process.env.MONTHLY_INTEREST || DEFAULT_INTEREST_PERCENTAGE) + 100;
        const totalMonthlyPayment = (interestPercentage * monthlyPayment) / 100;
        return currencyFormatter(totalMonthlyPayment)
    }

    return loading ? (<Spinner />) :  (<div className ="card p-3">
                    <div className='card-body'>
                    <h5 className='text-dark-purple'>Payment Breakdown</h5>
                        <form onSubmit={submitRentRequest} className='mt-3'>
                            <div className='form-group my-3'>
                                <label>Rent request amount ?</label>
                                <input type='number' name='requestAmount' value={requestAmount} 
                                className='form-control' onChange={({ target: { value }}) => handleRequestAmount(value)} placeholder='Amount' />
                            </div>

                            <div className='form-group my-3'>
                                <label>Monthly payment plan ?</label>
                                <select className='form-control' name='paymentPlan' value={paymentPlan} onChange={({ target: {value }}) => handlePaymentPlan(value)}>
                                    <option value='1'>1 Month</option>
                                    <option value='3'>3 Months</option>
                                    <option value='6'>6 Months</option>
                                    <option value='12'>12 Months</option>
                                </select>
                            </div>

                            <div className='form-group my-3'>
                                <label>Payment Option </label>
                                <div className='card light-purple payment-option-card p-3'>
                                    <div className='d-flex justify-content-between'>
                                        <div> Pre-approved amount</div>
                                        <div> { currencyFormatter(requestAmount) } </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div> Monthly Payment</div>
                                        <div> { computeMonthlyPayment(requestAmount, paymentPlan) } </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div> Tenor</div>
                                        <div>  { paymentPlan }{ paymentPlan === 1 ? ' month' : ' months'} </div>
                                    </div>
                                </div>
                            </div>

                            <div className='form-group my-5'>
                                <input type='submit' className='btn btn-lg btn-purple form-control'  value='Accept' /> 
                            </div>
                        </form>
                    </div>
                </div>
        
                
    );
}

export default connect(null, { handleRentRequest })
(withRouter(PaymentBreakdown))