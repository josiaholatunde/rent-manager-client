import React, { useState } from 'react'
import './CreateRentRequest.scss'
import PaymentBreakdown from './payment/PaymentBreakdown'
import InitiateRentRequestForm from './InitiateRentRequestForm'


const CreateRentRequest = () => {

    const [requestAmount, setRequestAmount] = useState('')
    const [salaryAmount, setSalaryAmount] = useState('')
    const [paymentPlan, setPaymentPlan] = useState('')
    const [shouldDisplayPaymentBreakDown, setShouldDisplayPaymentBreakDown] = useState(false)

    const handleRentRequest = () => {
        setShouldDisplayPaymentBreakDown(true);

    }

    return (
        <div className='row mt-5'>
            <div className='col-lg-6 offset-lg-3'>
                <h5>My Rent</h5>
                {
                    shouldDisplayPaymentBreakDown ? <PaymentBreakdown 
                    salaryAmount={salaryAmount}
                    handleRequestAmount= {setRequestAmount}
                    handlePaymentPlan={setPaymentPlan}
                    requestAmount={requestAmount} 
                    paymentPlan={paymentPlan} /> : 

                    <InitiateRentRequestForm 
                    handleRentRequest={handleRentRequest} 
                    handleRequestAmount= {setRequestAmount}
                    handlePaymentPlan={setPaymentPlan}
                    handleSalaryAmount={setSalaryAmount}
                    requestAmount={requestAmount} 
                    paymentPlan={paymentPlan}
                    salaryAmount={salaryAmount}

                    />
                }
            </div>
        </div>
                
    );
}

export default CreateRentRequest