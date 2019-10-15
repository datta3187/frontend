import {
    FETCH_2FA,
    FAIL_2FA
} from '../constants/twoFactorAuth';

const initState = {
   errorMsg: null
};

function twoFactorAuthReducer(state = initState, action) {
    debugger
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