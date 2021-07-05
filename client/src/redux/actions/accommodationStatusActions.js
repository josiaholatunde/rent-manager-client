import axios from '../../util/axiosConfig'
import { hideLoading, showLoading } from './loadingActions'
import { FETCH_ACCOMMODATION_STATUSES, SET_ERROR } from './types'
import { showNotification } from '../../util/notifications/NotificationUtil';

export const getAccommodationStatuses = () => dispatch => {
    try {
        dispatch(showLoading())
        setTimeout(async() => {
            try {
                const { data } = await axios.get('/accommodation-status')
                if (data) {
                    const statuses = data.data
                        // send success notification
                    dispatch({ type: FETCH_ACCOMMODATION_STATUSES, payload: statuses })
                    dispatch(hideLoading())
                }
            } catch (error) {
                dispatch(hideLoading())
                let errorMessage = error.response && error.response.data.message;
                showNotification('danger', errorMessage || 'Error occurred while fetching accommodation statuses')
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