import { FETCH_ACCOMMODATION_STATUSES } from '../actions/types'
const initialState = {
    statuses: []
}

const accommodationStatusReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_ACCOMMODATION_STATUSES:
            return {
                ...state,
                statuses: payload,
            }
        default:
            return state;
    }
}

export default accommodationStatusReducer;