import { MARKET } from '../constants/actions';

export const assignMarket = payload => {
    return {
        type: MARKET,
        market: payload
    };
};