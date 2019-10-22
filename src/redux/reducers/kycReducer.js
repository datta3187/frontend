import {
    SUBMIT_KYC,
    SUCCESS_SUBMIT_KYC,
    FAIL_SUBMIT_KYC,
    FETCH_DOCUMENTS, REFRESH_DOCUMENTS, FAIL_DOCUMENTS
} from '../constants/kyc';

const initState = {
    loading: false,
    error: false,
    documents: [],
    docError: ''
};

function kycReducer(state = initState, action) {
    switch (action.type) {
        case SUBMIT_KYC: {
            return { ...state, loading: true };
        }
        case SUCCESS_SUBMIT_KYC: {
            return { ...state, loading: false};
        }
        case  FAIL_SUBMIT_KYC: {
            return { ...state, loading: false, error: action.payload.message };
        }
        case  FETCH_DOCUMENTS: {
            return { ...state };
        }
        case  REFRESH_DOCUMENTS: {
            return { ...state, documents: action.data };
        }
        case FAIL_DOCUMENTS: {
            return { ...state, docError: action.docError };
        }
        default: {
            return state;
        }
    }
}

export default kycReducer;
