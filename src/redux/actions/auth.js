import {
    FETCH_LOGOUT,
    FAIL_LOGOUT,
    FETCH_LOGIN,
    FAIL_LOGIN,
    RESET_FAIL_LOGIN
} from '../constants/actions';


export const fetchLogout = () => {
    return { type: FETCH_LOGOUT };
};

export const failLogout = message => {
    return { type: FAIL_LOGOUT, payload: { message } };
};

export const fetchLogin = (email, password, captcha_response) => {
    return { type: FETCH_LOGIN, payload: { email, password, captcha_response } };
};

export const failLogin = message => {
    return { type: FAIL_LOGIN, payload: { message } };
};

export const resetFailLogin = () => {
    return { type: RESET_FAIL_LOGIN };
};
