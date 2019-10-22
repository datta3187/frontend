import {
    FETCH_FORGOT_PASSWORD,
    FAIL_FORGOT_PASSWORD,
    SET_MODAL_VALUE
} from '../constants/forgotPassword';

export const fetchForgotPassword = payload => {
    return { type: FETCH_FORGOT_PASSWORD, data: payload};
};

export const failForgotPassword = (message) => {
    return { type: FAIL_FORGOT_PASSWORD,  payload: message };
};

export const openModal = (payload) => {
    return { type: SET_MODAL_VALUE, data: payload}
}
