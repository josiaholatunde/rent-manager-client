import React, { useState } from 'react'


const InitiateRentRequestForm = ({ handleRentRequest, 
    salaryAmount, paymentPlan, requestAmount,
    handleRequestAmount, handlePaymentPlan, handleSalaryAmount
 }) => {
   
    const [accommodationStatus, setAccommodationStatus] = useState('renew_rent')
    const [errors, setErrors] = useState({})

    const validateRequestAmount = () => {
        const errors = {}
        if (!requestAmount) {
            errors.requestAmount = 'The request amount field is required'
        } 
        setErrors(errors)
    }

    const validateSalaryAmount = () => {
        const errors = {}
        if (!salaryAmount) {
            errors.salaryAmount = 'The salary amount field is required'
        }
        setErrors(errors)
    }


    const validateFormDetails = () => {
        const errors = {};
        
        if (!requestAmount) {
            errors.requestAmount = 'The request amount field is required'
        } 
        
        if (!salaryAmount) {
            errors.salaryAmount = 'The salary amount field is required'
        }

        if (!paymentPlan) {
            errors.paymentPlan = 'The payment plan field is required'
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
            });
        }
    }


    return (<div className ="card p-3">
    <div className='card-body'>
    <h5 className='text-dark-purple'>Payment Option</h5>
        <form onSubmit={handleSubmit} className='mt-3'>
            <div className='form-group'>
                <label>What's your accomodation status ?</label>
                <div className={`${'burger-card'} ${accommodationStatus === 'renew_rent' && 'purple'}`} 
                onClick={() => setAccommodationStatus('renew_rent')}>
                    Looking to renew my rent
                </div>
                <div className={`burger-card my-3 ${accommodationStatus === 'pay_new_place' && 'purple'}`} onClick={() => setAccommodationStatus('pay_new_place')}>
                    Want to pay for a new place
                </div>
                <div className={`burger-card ${accommodationStatus === 'still_searching' && 'purple'}`} onClick={() => setAccommodationStatus('still_searching')}>
                    I'm still searching
                </div>
            </div>
            <div className='form-group my-3'>
                <label>How much is your rent request amount ?</label>
                <input type='number' name='requestAmount' value={requestAmount} 
                className='form-control' onChange={({ target: { value }}) => {
                    handleRequestAmount(value)
                    validateRequestAmount()
                }} placeholder='Amount' />
                {
                    errors.requestAmount && (<span className='text-danger error-text'>{errors.requestAmount}</span>)
                }
            </div>

            <div className='form-group my-3'>
                <label>How much do you earn monthly ?</label>
                <input type='text' name='salaryAmount' value={salaryAmount} 
                className='form-control' onChange={({ target: { value }}) => { 
                    handleSalaryAmount(value)
                    validateSalaryAmount()
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
                    <option value='1'>1 Month</option>
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