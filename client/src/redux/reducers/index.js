import { combineReducers } from "redux";
import authReducer from "./authReducer";
import loadingReducer from "./loadingReducer";
import rentRequestReducer from "./rentRequestReducer";

export default combineReducers({
    auth: authReducer,
    loading: loadingReducer,
    rentRequest: rentRequestReducer
})