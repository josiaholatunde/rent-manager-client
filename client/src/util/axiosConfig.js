import axios from 'axios'
import history from './history'
import { logOutUserOnTokenExpiration } from '../redux/actions/authActions';
import { showNotification } from './notifications/NotificationUtil';

let apiBaseUri = process.env.REACT_APP_API_BASE_URL

const axiosDefaultInstance = axios.create({
    baseURL: apiBaseUri,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
});

axiosDefaultInstance.interceptors.response.use((response) => {

    return response;
}, function(error) {
    if (error.response && (error.response.status === 401)) {
        const message = 'Token expired';
        showNotification('danger', message)
        history.push({
            pathname: '/login',
            state: history.location
        });
        logOutUserOnTokenExpiration();
    }
    return Promise.reject(error);
})


export default axiosDefaultInstance;