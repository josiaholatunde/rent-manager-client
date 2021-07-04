import { SET_LOADING } from "./types";

export const showLoading = () => ({
    type: SET_LOADING,
    payload: true
})


export const hideLoading = () => ({
    type: SET_LOADING,
    payload: false
})