const initialState = {
    createdUser: null,
    token: null,
    user: null,
    error: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_USER:
            return {
                ...state,
                createdUser: payload,
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