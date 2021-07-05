import React, { useEffect } from 'react'
import currencyFormatter from '../../../util/currencyFormatter'
import { connect, useDispatch, useSelector } from 'react-redux';
import { getRentRequest } from '../../../redux/actions/rentActions' 
import { withRouter } from "react-router-dom";
import Spinner from '../../layout/Spinner'
import '../CreateRentRequest.scss'
import './PaymentBreakdown.scss'

const ViewPaymentBreakdown = ({ match }) => {

    const dispatch = useDispatch();

    const { loading, rentRequest: {  rentRequest: createdRentRequest } } = useSelector(state => state);


    const computeStatus = createdRentRequest => {
        if (createdRentRequest && createdRentRequest.isApproved) {
            return createdRentRequest.isApproved ? 'Approved': 'Pending Approval'
        }
        return 'Pending Approval'
    }

    useEffect(() => {
        const rentRequestId = match.params.id
        if (rentRequestId) {
            dispatch(getRentRequest(rentRequestId))
        }
            // eslint-disable-next-line
    }, [])

    return loading ? <Spinner /> :  (
        <div className='row mt-5'>
        <div className='col-lg-6 offset-lg-3'>
            <div className ="card p-3">
                    <div className='card-body'>
                            <div className='d-flex justify-content-between'>
                                <h5 className='text-dark-purple'>Payment Breakdown</h5>
                                <label>Status : <div className='chip'>{computeStatus(createdRentRequest)}</div></label>
                            </div>
                            <div className='form-group my-3'>
                                <label>Rent request amount ?</label>
                                <div> { createdRentRequest && currencyFormatter(createdRentRequest.requestAmount) } </div>
                            </div>

                            <div className='form-group my-3'>
                                <label>Monthly payment plan ?</label>
                                <div> { createdRentRequest && createdRentRequest.paymentPlan } { createdRentRequest &&  createdRentRequest.paymentPlan === 1 ? ' month' : ' months' } </div>
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
                                        <div> { currencyFormatter(createdRentRequest && createdRentRequest.monthlyAmount) } </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div> Tenor</div>
                                        <div>  { createdRentRequest && createdRentRequest.paymentPlan }{ createdRentRequest && createdRentRequest.paymentPlan === 1 ? ' month' : ' months'} </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
                
    );
}

export default connect(null, null)(withRouter(ViewPaymentBreakdown))