import {MARKET, ADD_ORDER, FAIL_ORDER} from "../constants/actions";

const  initialState = {
    market: '',
    errorOrder: null
}

function tradeReducer(state = initialState, action) {
    switch (action.type) {
        case MARKET: {
            return { ...state, market: action.market };
        }
        case ADD_ORDER: {
            return { ...state, errorOrder: null };
        }
        case FAIL_ORDER: {
            return { ...state, errorOrder: action.payload };
        }
        default:
            return state;
    }
}

export default tradeReducer;