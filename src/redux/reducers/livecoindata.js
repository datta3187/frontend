import {
    FETCH_COIN_DATA,
    FETCH_COIN_DATA_FAIL,
    FETCH_COIN_DATA_SUCCESS,
    FETCH_CURRENCIES,
    FETCH_CURRENCIES_SUCCESS
 
} from '../constants/actions';

const initState = {
    data: null,
    currency:{}
};

function livecoinReducer(state = initState, action) {
    // console.log('action12312312 ',action.type)
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

        case FETCH_CURRENCIES : {
            return {...state}
        }

        case FETCH_CURRENCIES_SUCCESS : {
            return Object.assign({}, state, {
                currency: Array.prototype.concat(action.payload)
            });
        }
        
        default:
            return state;
    }
}

export default livecoinReducer;
