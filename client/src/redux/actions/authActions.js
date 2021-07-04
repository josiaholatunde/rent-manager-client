import axios from '../../utils/axiosConfig'
import { hideLoading, showLoading } from './loadingActions'
import { CREATE_USER } from './types'


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
                    showNotification('success', 'Registration was successful')
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