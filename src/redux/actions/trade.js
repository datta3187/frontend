import {ADD_ORDER, MARKET} from '../constants/actions';

export const assignMarket = payload => {
    return { type: MARKET, market: payload };
};

export const submitOrder = payload => {
    return { type: ADD_ORDER,  payload: payload };
};

export const failOrder = message => {
    return { type: ADD_ORDER,  payload: message };
};