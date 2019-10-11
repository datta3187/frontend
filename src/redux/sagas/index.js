import { all } from 'redux-saga/effects';
import { fetchUserSaga } from './user';
// import { fetchWalletSaga, setActiveWalletSaga, fetchWalletAddressSaga } from './wallet';
// import { fetchHistorySaga } from './history';
// import { fetchSubmitWithdrawSaga } from './withdraw';
import { fetchLogoutSaga, fetchLoginSaga } from './auth';
<<<<<<< HEAD
import {fetchCoinDataSaga,}  from './livecoindata';
=======
import {placeOrderSaga} from './trade';
>>>>>>> 18915baa8134a6f9341a94b15eb7a8b4d2340e9d


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
<<<<<<< HEAD
        fetchCoinDataSaga(),

=======
        placeOrderSaga()
>>>>>>> 18915baa8134a6f9341a94b15eb7a8b4d2340e9d
    ]);
}