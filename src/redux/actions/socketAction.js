import { MARKET_TRADE, MY_TRADE, GLOBAL_TICKERS } from '../constants/trade';

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

export const globalTickers = payload => {
    return {
        type: GLOBAL_TICKERS,
        data: payload
    };
};
