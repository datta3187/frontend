import {MARKET, ADD_ORDER, FAIL_ORDER, RESET_ORDER, MY_ORDER, FETCH_ORDERS} from "../constants/actions";

const  initialState = {
    market: '',
    errorOrder: null,
    orderStatus: false,
    myAllOrders: []
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
        case RESET_ORDER: {
            return { ...state, orderStatus: action.status };
        }
        case FETCH_ORDERS: {
            return { ...state };
        }
        case MY_ORDER: {
            return { ...state, myAllOrders: action.data };
        }

        default:
            return state;
    }
}

export default tradeReducer;