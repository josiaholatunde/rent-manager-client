import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { createUserAccount } from '../../redux/actions/authActions' 
import { withRouter } from "react-router-dom";
import Spinner from '../../components/layout/Spinner'

const Signup = ({ history }) => {

    const [userName, setUserName ] = useState('')
    const [fullName, setFullName ] = useState('')
    const [password, setPassword ] = useState('')
    const [errors, setErrors] = useState({})

    const dispatch = useDispatch();

    const loading = useSelector(state => state.loading);


    const validateUsername = (userName) => {
        const allErrors = {...errors}
        if (!userName || userName.trim().length === 0) {
            allErrors.userName = 'The user name field is required'
        } else {
            delete allErrors.userName
        }
        setErrors(allErrors)
    }

    const validateFullName = (fullName) => {
        const allErrors = {...errors}
        if (!fullName || fullName.trim().length === 0) {
            allErrors.fullName = 'The full name field is required'
        } else {
            delete allErrors.fullName
        }
        setErrors(allErrors)
    }

    const validatePassword = (password) => {
        const allErrors = {...errors}
        if (!password || password.trim().length === 0) {
            allErrors.password = 'The password field is required'
        } else {
            delete allErrors.password
        }
        setErrors(allErrors)
    }

    const registerUser = (event) => {
        event.preventDefault()

        const errors = {}

        if (!userName || userName.trim().length === 0) {
            errors.userName = 'The user name field is required'
        }

        if (!fullName || fullName.trim().length === 0) {
            errors.fullName = 'The full name field is required'
        }

        if (!password || password.trim().length === 0) {
            errors.password = 'The password field is required' 
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors)
            return false;
        }

        dispatch(createUserAccount({
            userName,
            fullName,
            password
        }, history))
    }

    const isRegisterationFormInvalid = () => {
        return Object.keys(errors).length > 0
    }

    return loading ? <Spinner /> : (<div className='row mt-5'>
                <div className='col-lg-6 offset-lg-3'>
                    <h5>Register</h5>
                    <div className ="card p-3">
                        <div className='card-body'>
                            <form onSubmit={registerUser}>
                                    <div className='form-group'>
                                        <label htmlFor='userName'> Username </label>
                                        <input type='text' name='userName' value={userName} id='userName' className='form-control' 
                                        onChange={({ target: { value }}) => {
                                            setUserName(value)
                                            validateUsername(value)
                                        }}
                                        placeholder='Enter your preferred username ?' />
                                        {
                                            errors.userName && (<span className='text-danger error-text'>{errors.userName}</span>)
                                        }
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='fullName'> Full Name </label>
                                        <input type='text' name='fullName' value={fullName} id='fullName' className='form-control' 
                                        onChange={({ target: { value }}) => {
                                            setFullName(value)
                                            validateFullName(value)
                                        }}
                                        placeholder='Enter your full name ?' />
                                        {
                                            errors.fullName && (<span className='text-danger error-text'>{errors.fullName}</span>)
                                        }
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='password'> Password </label>
                                        <input type='password' name='password' value={password} id='password' className='form-control' 
                                        onChange={({ target: { value }}) => {
                                            setPassword(value)
                                            validatePassword(value)
                                        }}
                                        placeholder='Enter your password ?' />
                                         {
                                            errors.password && (<span className='text-danger error-text'>{errors.password}</span>)
                                        }
                                    </div>
                                    <div className='form-group'>
                                        <input type='submit' 
                                        disabled={isRegisterationFormInvalid()}
                                        className='btn btn-lg btn-purple form-control' value='Register' />
                                    </div>
                                    
                                </form>
                        </div>
                    </div>
            </div>
        </div>)
}

export default connect(null, { createUserAccount })(withRouter(Signup))