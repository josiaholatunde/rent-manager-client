import { CREATE_USER, SET_LOGGED_IN_USER, SET_ERROR, LOG_USER_OUT, LOGIN_USER } from '../actions/types'
const initialState = {
    createdUser: null,
    token: null,
    user: null,
    error: null
}

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_USER:
            return {
                ...state,
                createdUser: payload,
            }
        case LOGIN_USER:
            return {
                ...state,
                token: payload.token,
                user: payload.user,
            }
        case SET_LOGGED_IN_USER:
            return {
                ...state,
                user: payload.user,
                token: payload.token
            }
        case SET_ERROR:
            return {
                ...state,
                error: payload
            }

        case LOG_USER_OUT:
            return {
                ...state,
                user: null,
                token: null,
                error: null,
                isLoading: false,
                createdUser: null,
                loginMode: null
            }
        default:
            return state;
    }
}

export default authReducer;