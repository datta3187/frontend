import { all } from 'redux-saga/effects';
import { fetchUserSaga } from './user';
// import { fetchWalletSaga, setActiveWalletSaga, fetchWalletAddressSaga } from './wallet';
// import { fetchHistorySaga } from './history';
// import { fetchSubmitWithdrawSaga } from './withdraw';
import { fetchLogoutSaga, fetchLoginSaga } from './auth';
import {fetchCoinDataSaga,}  from './livecoindata';
import {placeOrderSaga} from './trade';


export default function* rootSaga() {
    yield all([
        fetchUserSaga(),
        // fetchWalletSaga(),
        // setActiveWalletSaga(),
        // fetchWalletAddressSaga(),
        // fetchHistorySaga(),
        // fetchSubmitWithdrawSaga(),
        fetchLogoutSaga(),
        fetchLoginSaga(),
        fetchCoinDataSaga(),

        placeOrderSaga()
    ]);
}