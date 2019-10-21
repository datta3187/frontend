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
import forgotPasswordReducer from "./forgotPasswordReducer";
import registerReducer from "./registerReducer";
import twoFactorAuthReducer from "./twoFactorAuthReducer";
import profileReducer from './profileReducer'
import kycReducer from "./kycReducer";

export default combineReducers({
    router: connectRouter(history),
    tradeState: socketReducer,
    auth: authReducer,
    user: userReducer,
    wallet: walletReducer,
    history: historyReducer,
    withdraw: withdrawReducer,
    trade: tradeReducer,
    forgotPassword: forgotPasswordReducer,
    register: registerReducer,
    twoFactorAuth: twoFactorAuthReducer,
    profile: profileReducer,
    kyc: kycReducer
});
