import {ADD_ORDER, MARKET, RESET_ORDER, FAIL_ORDER, TOTAL, MY_ORDER, FETCH_ORDERS} from '../constants/actions';

export const assignMarket = payload => {
    return { type: MARKET, market: payload };
};

export const submitOrder = payload => {
    return { type: ADD_ORDER,  data: payload };
};

// export const failOrder = message => {
//     return { type: FAIL_ORDER,  payload: message };
// };

export const resetOrder = (status) => {
    return { type: RESET_ORDER, status: status };
}

export const fetchOrders = () => {
    return { type: FETCH_ORDERS };
}

export const myOrders = (payload) => {
    return { type: MY_ORDER, data: payload };
}