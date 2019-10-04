import {MARKET_TRADE, MY_TRADE, TRADE_LIMIT} from "../constants/actions";


const initialState = {
    trades: getTrades('market_trades'),
    my_trades: getTrades('my_trades')

}

function socketReducer(state= initialState, action){
    switch(action.type){
        case MARKET_TRADE:
            return Object.assign({}, state, {
                trades: Array.prototype.concat(action.data,  state.trades).slice(0,TRADE_LIMIT)
            });
        case MY_TRADE:
            return Object.assign({}, state, {
                my_trades: Array.prototype.concat(action.data,  state.my_trades).slice(0,TRADE_LIMIT)
            });
        default:
            return state;
    }
    return state;
}

function getTrades(key){
    try {
        const serializedMarketTrades = localStorage.getItem(key);
        if (serializedMarketTrades === null) {
            return [];
        } else {
            return JSON.parse(serializedMarketTrades)
        }
    } catch (error) {
        return [];
    }
}

export default socketReducer;
