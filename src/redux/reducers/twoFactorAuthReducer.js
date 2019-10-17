import {
    FETCH_2FA,
    FAIL_2FA
} from '../constants/twoFactorAuth';

const initState = {
   error2fa: null
};

function twoFactorAuthReducer(state = initState, action) {
    switch (action.type) {
        case FETCH_2FA: {
            return { ...state };
        }
        case FAIL_2FA: {
            return { ...state, error2fa: action.payload.message };
        }
        default:
            return state;
    }
}

export default twoFactorAuthReducer;