import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { history } from '../history';

import socketReducer from './socketReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';
import walletReducer from './walletReducer';
import historyReducer from './historyReducer';
import withdrawReducer from './withdrawReducer';
import tradeReducer from './tradeReducer';
import livecoinReducer from './livecoindata'

export default combineReducers({
    router: connectRouter(history),
    tradeState: socketReducer,
    auth: authReducer,
    user: userReducer,
    wallet: walletReducer,
    history: historyReducer,
    withdraw: withdrawReducer,
    trade: tradeReducer,
    livecoin: livecoinReducer
});
