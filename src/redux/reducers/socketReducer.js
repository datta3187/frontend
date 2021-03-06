import {MARKET_TRADE, MY_TRADE, TRADE_LIMIT, GLOBAL_TICKERS} from "../constants/trade";
import config from '../../config'


const initialState = {
    trades: getTrades('market_trades'),
    myTrades: getTrades('my_trades'),
    globalTickers: {},

}

function socketReducer(state= initialState, action){
    console.log('My action : ', action)
    // console.log('My ticker : ', JSON.stringify(initialState.globalTickers));
    switch(action.type){
        case MARKET_TRADE:
            return Object.assign({}, state, {
                trades: Array.prototype.concat(action.data,  state.trades).slice(0,TRADE_LIMIT)
            });
        case MY_TRADE:
            return Object.assign({}, state, {
                myTrades: Array.prototype.concat(action.data,  state.myTrades).slice(0,TRADE_LIMIT)
            });
        case GLOBAL_TICKERS:
            return Object.assign({}, state, {
                globalTickers: action.data
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

// function check(){
//     const ws = new WebSocket(config.webSocketUrl + 'global.tickers')
//     ws.onmessage = response => {
//         console.log("=================>", response.data);
//     }
//
//     return null;
// }

export default socketReducer;
