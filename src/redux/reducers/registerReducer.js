import {
    FETCH_REGISTER,
    FAIL_REGISTER,
    SUCCESS_REGISTER,
    RESET_FAIL_REGISTER
} from '../constants/register';

const initState = {
    errorRegister: null,
    loading: false,
    list: {}
};

function registerReducer(state = initState, action) {
    switch (action.type) {
        case FETCH_REGISTER: {
            return { ...state, loading: true, errorRegister: null };
        }
        case SUCCESS_REGISTER: {
            return { ...state, loading: false, list: action.payload.data };
        }
        case FAIL_REGISTER: {
            return { ...state, loading: false, errorRegister: action.payload.message };
        }
        case RESET_FAIL_REGISTER: {
            return { ...state, errorLogin: null };
        }
        default:
            return state;
    }
}

export default registerReducer;