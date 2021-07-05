import axios from '../../util/axiosConfig'
import { hideLoading, showLoading } from './loadingActions'
import { CREATE_RENT_REQUEST, SET_ERROR, FETCH_RENT_REQUEST } from './types'
import { showNotification } from '../../util/notifications/NotificationUtil';

export const handleRentRequest = (rentPayload, history) => dispatch => {
    try {
        dispatch(showLoading())
        setTimeout(async() => {
            try {
                const user = getLoggedInUser();
                const { data } = await axios.post('/rent-request', {...rentPayload, requester: user._id })
                if (data) {
                    const rentRequest = data.data
                        // send success notification
                    dispatch({ type: CREATE_RENT_REQUEST, payload: rentRequest })
                    dispatch(hideLoading())
                    showNotification('success', 'Successfully created rent request')
                    history.push(`/rent-request/${rentRequest._id}`)
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

export const getRentRequest = (id) => dispatch => {
    try {
        dispatch(showLoading())
        setTimeout(async() => {
            try {
                const { data } = await axios.get(`/rent-request/${id}`)
                if (data) {
                    const rentRequest = data.data
                        // send success notification
                    dispatch({ type: CREATE_RENT_REQUEST, payload: rentRequest })
                    dispatch(hideLoading())
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

const getLoggedInUser = () => {
    return JSON.parse(localStorage.getItem('user'))
}