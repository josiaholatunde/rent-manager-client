import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions/authActions' 
import { withRouter } from "react-router-dom";
import Spinner from '../../components/layout/Spinner'

const Login = ({ history, location }) => {

    const [userName, setUserName ] = useState('')
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

    const validatePassword = (password) => {
        const allErrors = {...errors}
        if (!password || password.trim().length === 0) {
            allErrors.password = 'The password field is required'
        } else {
            delete allErrors.password
        }
        setErrors(allErrors)
    }

    const  handleLoginUser = (event) => {
        event.preventDefault()

        const errors = {}

        if (!userName || userName.trim().length === 0) {
            errors.userName = 'The user name field is required'
        }

        if (!password || password.trim().length === 0) {
            errors.password = 'The password field is required' 
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors)
            return false;
        }

        dispatch(loginUser({
            userName,
            password
        }, { history, location }))
    }

    const isLoginFormInvalid = () => {
        return Object.keys(errors).length > 0
    }

    return loading ? <Spinner /> : (<div className='row mt-5'>
                <div className='col-lg-6 offset-lg-3'>
                    <h5>Login</h5>
                    <div className ="card p-3">
                        <div className='card-body'>
                            <form onSubmit={handleLoginUser}>
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
                                        disabled={isLoginFormInvalid()}
                                        className='btn btn-lg btn-green form-control' value='Login' />
                                    </div>
                                    
                                </form>
                        </div>
                    </div>
            </div>
        </div>)
}

export default connect(null, { loginUser })(withRouter(Login))