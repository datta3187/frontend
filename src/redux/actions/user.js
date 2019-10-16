import { FETCH_USER, SUCCESS_USER, FAIL_USER, RESET_USER, REGISTER_USER, SUCCESS_SIGN_UP_USER,FAILED_USER } from '../constants/actions';

export const fetchUser = () => {
    return { type: FETCH_USER };
};

export const successUser = data => {
    return { type: SUCCESS_USER, payload: { data } };
};




export const failUser = () => {
    return { type: FAIL_USER };
};

export const resetUser = () => {
    return { type: RESET_USER };
};

export const registerUsers = payload => {
    return { type: REGISTER_USER, payload:  payload };
};
export const successSignUpUser = data => {
    return { type: SUCCESS_SIGN_UP_USER, payload: { data } };
};
export const faildUser = () => {
    return { type: FAILED_USER};
};



