import {MARKET, ADD_ORDER, FAIL_ORDER, ORDER_PARAMS, RESET_ORDER, TOTAL} from "../constants/actions";
import * as formatter from "../../utils/Formatter";

const  initialState = {
    market: '',
    errorOrder: null,
    orderParams: { price: null, volume: null, market: '', side: '', ord_type: 'limit' },
    total: null
}

function tradeReducer(state = initialState, action) {
    switch (action.type) {
        case MARKET: {
            return { ...state, market: action.market };
        }
        case ORDER_PARAMS:{
            return { ...state, orderParams: action.data };
        }
        case ADD_ORDER: {
            return { ...state, errorOrder: null, orderParams: action.data };
        }
        case FAIL_ORDER: {
            return { ...state, errorOrder: action.payload };
        }
        case RESET_ORDER: {
            return { ...state, errorOrder: action.payload };
        }
        case TOTAL: {
            return { ...state, total: calculateTotal(action.data) };
        }
        default:
            return state;
    }
}

function calculateTotal(fields) {
    if(fields.price !== '' && fields.volume !== ''){
        return formatter.preciseNumber(formatter.total(fields.price, fields.volume));
    }
    return ''
}

export default tradeReducer;