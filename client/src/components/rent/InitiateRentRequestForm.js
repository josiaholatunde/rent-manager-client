import React, { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { getAccommodationStatuses } from '../../redux/actions/accommodationStatusActions'
import { useDispatch, useSelector } from 'react-redux'

const InitiateRentRequestForm = ({  handleRentRequest, 
    salaryAmount, paymentPlan, requestAmount,
    handleRequestAmount, handlePaymentPlan, handleSalaryAmount
 }) => {
   
    const [accommodationStatus, setAccommodationStatus] = useState('renew_rent')
    const [errors, setErrors] = useState({})
    const dispatch = useDispatch()

    const { statuses } = useSelector(state => state.accommodationStatuses )

    const validateRequestAmount = (requestAmount) => {
        const updatedErrors = {...errors}
        if (!requestAmount || requestAmount.trim().length === 0) {
            updatedErrors.requestAmount = 'The request amount field is required'
        } else {
            delete updatedErrors.requestAmount
        }
        setErrors(updatedErrors)
    }

    const validateSalaryAmount = (salaryAmount) => {
        const updatedErrors = {...errors}
        if (!salaryAmount ||  salaryAmount.trim().length === 0) {
            updatedErrors.salaryAmount = 'The salary amount field is required'
        } else {
            delete updatedErrors.salaryAmount
        }
        setErrors(updatedErrors)
    }



    const validateFormDetails = () => {
        const errors = {}
        
        if (!requestAmount || requestAmount.trim().length === 0) {
            errors.requestAmount = 'The request amount field is required'
        } 
        
        if (!salaryAmount || salaryAmount.trim().length === 0) {
            errors.salaryAmount = 'The salary amount field is required'
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors)
            return false;
        }
        return true;
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (validateFormDetails()) {
            handleRentRequest({
                requestAmount,
                salaryAmount,
                paymentPlan
            })
        }
    }

    useEffect(() => {
        dispatch(getAccommodationStatuses())
    }, [])


    return (<div className ="card p-3">
    <div className='card-body'>
    <div class='d-flex justify-content-between'>
        <h5 className='text-dark-purple'>Payment Option</h5>
        <div className='d-flex' style={{ width: 30, height: 30 }}>
            <CircularProgressbar value={50} text={`50%`} styles={buildStyles({pathColor: '#25dc99'})} />
        </div>
    </div>
        <form onSubmit={handleSubmit} className='mt-3'>
            <div className='form-group'>
                <label>What's your accomodation status ?</label>
                { statuses.map(status => (<div key={status.code} className={`burger-card mb-3 ${accommodationStatus === status.code && 'purple'}`} onClick={() => setAccommodationStatus(status.code)}>
                    { status.friendlyName }
                </div>))}
            </div>
            <div className='form-group my-3'>
                <label>How much is your rent request amount ?</label>
                <input type='number' name='requestAmount' value={requestAmount} 
                className='form-control' onChange={({ target: { value }}) => {
                    handleRequestAmount(value)
                    validateRequestAmount(value)
                }} placeholder='Amount' />
                {
                    errors.requestAmount && (<span className='text-danger error-text'>{errors.requestAmount}</span>)
                }
            </div>

            <div className='form-group my-3'>
                <label>How much do you earn monthly ?</label>
                <input type='number' name='salaryAmount' value={salaryAmount} 
                className='form-control' onChange={({ target: { value }}) => { 
                    handleSalaryAmount(value)
                    validateSalaryAmount(value)
                }} placeholder='Amount' />
                {
                    errors.salaryAmount && (<span className='text-danger error-text'>{errors.salaryAmount}</span>)
                }
            </div>

            <div className='form-group my-3'>
                <label>Choose a monthly payment plan ?</label>
                <select className='form-control' name='paymentPlan' value={paymentPlan} onChange={({ target: {value }}) => {
                    handlePaymentPlan(value)
                }}>
                    <option value='1' defaultChecked>1 Month</option>
                    <option value='3'>3 Months</option>
                    <option value='6'>6 Months</option>
                    <option value='12'>12 Months</option>
                </select>
                {
                    errors.paymentPlan && (<span className='text-danger error-text'>{errors.paymentPlan}</span>)
                }
            </div>

            <div className='form-group my-5'>
                <input type='submit' disabled={Object.keys(errors).length > 0} className='btn btn-lg btn-green form-control'  value='Next' /> 
            </div>
        </form>
    </div>
</div>)
}

export default InitiateRentRequestForm