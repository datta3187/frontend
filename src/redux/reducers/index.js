import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { history } from '../history';

import socketReducer from './socketReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';


export default combineReducers({
    router: connectRouter(history),
    tradeState: socketReducer,
    auth: authReducer,
    user: userReducer,
});
