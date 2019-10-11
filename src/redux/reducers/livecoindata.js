import {
    FETCH_COIN_DATA,
    FETCH_COIN_DATA_FAIL,
    FETCH_COIN_DATA_SUCCESS
 
} from '../constants/actions';

const initState = {
    errorLogin: null,
    errorLogout: null,
};

function livecoinReducer(state = initState, action) {
    console.log('action ',action)
    switch (action.type) {
        case FETCH_COIN_DATA: {
            return { ...state };
        }
        case FETCH_COIN_DATA_SUCCESS: {
            return { ...state };
        }
        case FETCH_COIN_DATA_FAIL: {
            return { ...state };
        }
        default:
            return state;
    }
}

export default livecoinReducer;
