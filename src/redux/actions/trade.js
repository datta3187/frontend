import {ADD_ORDER, MARKET, RESET_ORDER, FAIL_ORDER, TOTAL, MY_ORDER, FETCH_OPEN_ORDERS, ALL_ORDER, FETCH_ALL_ORDERS} from '../constants/trade';

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

export const fetchOpenOrders = (payload) => {
    return { type: FETCH_OPEN_ORDERS, filters: payload };
}

export const myOrders = (payload) => {
    return { type: MY_ORDER, data: payload };
}

export const fetchAllOrders = (payload) => {
    return { type: FETCH_ALL_ORDERS, filters: payload };
}

export const allOrders = (payload) => {
    return { type: ALL_ORDER, data: payload };
}