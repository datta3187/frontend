import {
    SET_PROFILE,
    SUCCESS_PROFILE,
    FAIL_SET_PROFILE,
    FETCH_PROFILE,
    FAIL_FETCH_PROFILE, SUCCESS_FETCH_PROFILE
} from '../constants/profile';

const initState = {
    loading: false,
    error: false,
};

function profileReducer(state = initState, action) {
    switch (action.type) {
        case SET_PROFILE: {
            return { ...state, loading: true };
        }
        case SUCCESS_PROFILE: {
            return { ...state, loading: false};
        }
        case  FAIL_SET_PROFILE: {
            return { ...state, loading: false, error: action.payload.message };
        }
        case FETCH_PROFILE: {
            return { ...state, loading: true };
        }
        case FAIL_FETCH_PROFILE: {
            return { ...state, error: action.payload.message};
        }
        case SUCCESS_FETCH_PROFILE: {
            return { ...state, loading: false}
        }
        default: {
            return state;
        }
    }
}

export default profileReducer;
