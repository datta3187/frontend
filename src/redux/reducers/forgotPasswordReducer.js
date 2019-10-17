import {
    FETCH_FORGOT_PASSWORD,
    FAIL_FORGOT_PASSWORD, SET_MODAL_VALUE,
} from '../constants/forgotPassword';

const initState = {
    isParentOpen: false,
    error: false
};

function forgotPasswordReducer(state = initState, action) {
    switch (action.type) {
        case FETCH_FORGOT_PASSWORD: {
            return { ...state, isParentOpen: true };
        }
        case FAIL_FORGOT_PASSWORD: {
            return { ...state, isParentOpen: false, error: action.payload.message };
        }
        case SET_MODAL_VALUE: {
            return { ...state, isParentOpen: action.data };
        }
        default: {
            return state;
        }
    }
}

export default forgotPasswordReducer;