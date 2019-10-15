import { all } from 'redux-saga/effects';
import { fetchUserSaga } from './user';
import { fetchWalletSaga, setActiveWalletSaga, fetchWalletAddressSaga } from './wallet';
import { fetchHistorySaga } from './history';
import { fetchSubmitWithdrawSaga } from './withdraw';
import { fetchLogoutSaga, fetchLoginSaga } from './auth';
import {placeOrderSaga, fetchOrdersSaga} from './trade';
import { twoFactorAuthSaga } from './twoFactorAuth';


export default function* rootSaga() {
    yield all([
        fetchUserSaga(),
        fetchWalletSaga(),
        setActiveWalletSaga(),
        fetchWalletAddressSaga(),
        fetchHistorySaga(),
        fetchSubmitWithdrawSaga(),
        fetchLogoutSaga(),
        fetchLoginSaga(),
        placeOrderSaga(),
        fetchOrdersSaga(),
        twoFactorAuthSaga()
    ]);
}