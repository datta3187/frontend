import {
    MARKET_TRADE,
    MY_TRADE
} from '../constants/actions';

export const addMarketTrade = payload => {
    return {
        type: MARKET_TRADE,
        data: payload
    };
};

export const addMyTrade = payload => {
    return {
        type: MY_TRADE,
        data: payload
    };
};
