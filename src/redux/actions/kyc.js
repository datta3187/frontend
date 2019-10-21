import {
    SUBMIT_KYC,
    SUCCESS_SUBMIT_KYC,
    FAIL_SUBMIT_KYC
} from '../constants/kyc';

export const submitKyc = (payload) => {
    return { type: SUBMIT_KYC, data: payload };
};

export const successSubmitKyc = () => {
    return { type: SUCCESS_SUBMIT_KYC };
};

export const failSubmitKyc = (message) => {
    return { type: FAIL_SUBMIT_KYC, payload: { message }  };
};