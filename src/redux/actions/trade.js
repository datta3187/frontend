import {ADD_ORDER, MARKET, ORDER_PARAMS, RESET_ORDER, FAIL_ORDER, TOTAL} from '../constants/actions';

export const assignMarket = payload => {
    return { type: MARKET, market: payload };
};

export const submitOrder = payload => {
    return { type: ADD_ORDER,  data: payload };
};

// export const failOrder = message => {
//     return { type: FAIL_ORDER,  payload: message };
// };

export const setOrderAttrributes = payload => {
    return { type: ORDER_PARAMS,  data: payload };
}

export const resetOrder = () => {
    return { type: RESET_ORDER, data: {price: null, volume: null} };
}

export const totalAmount = (payload) => {
    return { type: TOTAL, data: payload };
}