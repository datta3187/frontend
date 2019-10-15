import {
    FETCH_2FA,
    FAIL_2FA,
} from '../constants/twoFactorAuth';


export const fetch2fa = (code) => {
    return { type: FETCH_2FA, otpCode: code };
};

export const fail2fa = message => {
    return { type: FAIL_2FA, payload: { message } };
};
