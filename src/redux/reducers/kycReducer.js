import {
    SUBMIT_KYC,
    SUCCESS_SUBMIT_KYC,
    FAIL_SUBMIT_KYC
} from '../constants/kyc';

const initState = {
    loading: false,
    error: false,
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
        default: {
            return state;
        }
    }
}

export default kycReducer;
