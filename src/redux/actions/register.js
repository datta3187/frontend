import {
    FETCH_REGISTER,
    FAIL_REGISTER,
    SUCCESS_REGISTER,
    RESET_FAIL_REGISTER
} from '../constants/register';

export const fetchRegister = (payload) => {
    return { type: FETCH_REGISTER, data: payload };
};

export const failRegister = message => {
    return { type: FAIL_REGISTER, payload: { message } };
};

export const successRegister = data => {
    return { type: SUCCESS_REGISTER, payload: { data }  };
};

export const resetFailRegister = () => {
    return { type: RESET_FAIL_REGISTER };
};
