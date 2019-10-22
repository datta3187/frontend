import {
    FETCH_2FA,
    FAIL_2FA
} from '../constants/twoFactorAuth';

const initState = {
    error: null,
    loading: false
};

function twoFactorAuthReducer(state = initState, action) {
    switch (action.type) {
        case FETCH_2FA: {
            return { ...state, loading: true };
        }
        case FAIL_2FA: {
            return { ...state, loading: false, error: action.payload.message };
        }
        default:
            return state;
    }
}

export default twoFactorAuthReducer;