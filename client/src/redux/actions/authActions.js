import axios from '../../util/axiosConfig'
import { hideLoading, showLoading } from './loadingActions'
import { CREATE_USER, LOG_USER_OUT, CLEAR_USER, SET_ERROR, LOGIN_USER } from './types'
import { showNotification } from '../../util/notifications/NotificationUtil';
import setAuthToken from '../../util/setAuthToken';

export const createUserAccount = (userToCreate, history) => async dispatch => {
    try {
        dispatch(showLoading())
        setTimeout(async() => {
            try {
                const { data } = await axios.post('/register', userToCreate)
                if (data) {
                    const user = data.data
                        // send success notification
                    dispatch({ type: CREATE_USER, payload: user })
                    dispatch(hideLoading())
                        // showNotification('success', 'Registration was successful')
                        //redirect user to login
                    history.push('/login')
                }
            } catch (error) {
                dispatch(hideLoading())
                let errorMessage = error.response && error.response.data.message;
                showNotification('danger', errorMessage || 'Error occurred while creating user account')
                    // log error
                if (error.response && error.response.data.error && error.response.data.error.length > 0) {
                    // print nested error messages
                    errorMessage += `\n` + Object.values(error.response.data.error).map(err => err.msg).join('\n')
                    showNotification('danger', errorMessage);
                }
                dispatch({ type: SET_ERROR, payload: errorMessage })
            }
        }, 2000)
    } catch (error) {
        //display error
        dispatch(hideLoading())
        console.error('Error', error)
    }
}

export const logOutUserOnTokenExpiration = () => async dispatch => {
    localStorage.setItem('user', null)
    localStorage.setItem('token', null)
    dispatch(logUserOut())
    dispatch(handleClearUserState())

}

export const logUserOut = function() {
    return {
        type: LOG_USER_OUT
    }
}

export const handleClearUserState = function() {
    return {
        type: CLEAR_USER
    }
}

export const loginUser = (userToLogin, { history, location }) => dispatch => {
    try {
        dispatch(showLoading())
        setTimeout(async() => {
            try {
                const { data } = await axios.post('/login', userToLogin)
                if (data) {
                    const { token, user } = data && data.data
                        // send success notification
                    setAuthToken(token);
                    dispatch({
                        type: LOGIN_USER,
                        payload: {
                            user,
                            token
                        }
                    })
                    dispatch(hideLoading())
                    storeUserCredentialsInLocalStorage({ user, token });
                    showNotification('success', 'Login was successful')
                        //redirect user to login
                        //check previous route of user
                        //else redirect to dashboard
                    if (location.state && location.state.pathname) {
                        history.push(location.state.pathname)
                    } else {
                        history.push('/rent-request/add')
                    }
                }
            } catch (error) {
                dispatch(hideLoading())
                let errorMessage = error.response && error.response.data.message;
                showNotification('danger', errorMessage || 'Error occurred while logging in user')
                    // log error
                if (error.response && error.response.data.error && error.response.data.error.length > 0) {
                    // print nested error messages
                    errorMessage += `\n` + Object.values(error.response.data.error).map(err => err.msg).join('\n')
                    showNotification('danger', errorMessage);
                }
                dispatch({ type: SET_ERROR, payload: errorMessage })
            }
        }, 5000)

    } catch (error) {
        //display error
        dispatch(hideLoading())
        console.log('An error occurred while setting loading')
    }
}

export const storeUserCredentialsInLocalStorage = ({ user, token }) => {
    if (user) {
        localStorage.setItem('user', JSON.stringify(user))
    }
    if (token) {
        localStorage.setItem('token', token)
    }
}