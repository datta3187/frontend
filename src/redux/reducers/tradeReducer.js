import {MARKET, ADD_ORDER, FAIL_ORDER, RESET_ORDER, MY_ORDER, FETCH_OPEN_ORDERS, FETCH_ALL_ORDERS, ALL_ORDER} from "../constants/trade";

const  initialState = {
    market: '',
    errorOrder: null,
    orderStatus: false,
    OpenOrders: [],
    filters: {},
    allOrders: []
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
        case FETCH_OPEN_ORDERS: {
            return { ...state, filters: action.filters };
        }
        case MY_ORDER: {
            return { ...state, OpenOrders: action.data };
        }
        case FETCH_ALL_ORDERS: {
            return { ...state, filters: action.filters };
        }
        case ALL_ORDER: {
            return { ...state, allOrders: action.data };
        }


        default:
            return state;
    }
}

export default tradeReducer;