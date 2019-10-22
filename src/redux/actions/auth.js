import {
    FETCH_LOGOUT,
    FAIL_LOGOUT,
    FETCH_LOGIN,
    FAIL_LOGIN,
    RESET_FAIL_LOGIN,
    SUCCESS_FETCH_LOGIN
} from '../constants/auth';


export const fetchLogout = () => {
    return { type: FETCH_LOGOUT };
};

export const failLogout = message => {
    return { type: FAIL_LOGOUT, payload: { message } };
};

export const fetchLogin = (payload) => {
    return { type: FETCH_LOGIN, data: payload };
};

export const successFetchLogin = (payload) => {
    return { type: SUCCESS_FETCH_LOGIN, data: payload };
};

export const failLogin = message => {
    return { type: FAIL_LOGIN, payload: { message } };
};

export const resetFailLogin = () => {
    return { type: RESET_FAIL_LOGIN };
};
