import { SET_LOADING } from "../actions/types";

const loadingReducer = (state = null, { type, payload }) => {
    switch (type) {
        case SET_LOADING:
            return payload

        default:
            return state;
    }
}

export default loadingReducer