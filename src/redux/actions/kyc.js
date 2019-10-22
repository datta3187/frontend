import {
    SUBMIT_KYC,
    SUCCESS_SUBMIT_KYC,
    FAIL_SUBMIT_KYC,
    FETCH_DOCUMENTS,
    REFRESH_DOCUMENTS, FAIL_DOCUMENTS
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

export const fetchDocuments =() => {
    return { type: FETCH_DOCUMENTS };
}

export const refreshDocuments =(payload) => {
    return { type: REFRESH_DOCUMENTS, data: payload };
}

export const failFetchDocument =(error) => {
    return { type: FAIL_DOCUMENTS, docError: error };
}