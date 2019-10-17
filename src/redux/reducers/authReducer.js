import {
    FETCH_LOGOUT,
    FAIL_LOGOUT,
    FETCH_LOGIN,
    FAIL_LOGIN,
    RESET_FAIL_LOGIN
} from '../constants/auth';

const initState = {
    errorLogin: null,
    errorLogout: null,
    loading: false
};

function authReducer(state = initState, action) {
    switch (action.type) {
        case FETCH_LOGOUT: {
            return { ...state };
        }
        case FAIL_LOGOUT: {
            return { ...state, errorLogout: action.payload.message };
        }
        case FETCH_LOGIN: {
            return { ...state, loading: true, errorLogin: null };
        }
        case FAIL_LOGIN: {
            return { ...state,  loading: false, errorLogin: action.payload.message };
        }
        case RESET_FAIL_LOGIN: {
            return { ...state, errorLogin: null };
        }
        default:
            return state;
    }
}

export default authReducer;
