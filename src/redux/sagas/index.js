import { all } from 'redux-saga/effects';
import { fetchUserSaga } from './user';
import { fetchWalletSaga, setActiveWalletSaga, fetchWalletAddressSaga } from './wallet';
import { fetchHistorySaga } from './history';
import { fetchSubmitWithdrawSaga } from './withdraw';
import { fetchLogoutSaga, fetchLoginSaga } from './auth';
import { placeOrderSaga, fetchOpenOrdersSaga, fetchAllOrdersSaga } from './trade';
import { twoFactorAuthSaga } from './twoFactorAuth'
import { fetchRegisterSaga } from "./register";
import { fetchForgotPasswordSaga } from "./forgotPassword";

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
        fetchOpenOrdersSaga(),
        fetchAllOrdersSaga(),
        twoFactorAuthSaga(),
        fetchRegisterSaga(),
        fetchForgotPasswordSaga()
    ]);
}