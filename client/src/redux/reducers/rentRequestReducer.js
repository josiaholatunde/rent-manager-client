import { CREATE_RENT_REQUEST, FETCH_RENT_REQUEST } from '../actions/types'
const initialState = {
    rentRequest: null,
}

const rentRequestReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_RENT_REQUEST:
            return {
                ...state,
                rentRequest: payload,
            }
        default:
            return state;
    }
}

export default rentRequestReducer;