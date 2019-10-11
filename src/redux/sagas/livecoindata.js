import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/livecoindata';
import * as types from '../constants/actions';
import { getUser } from '../../api/user';
import { getcoindata } from '../../api/livecoindata';



// export function* fetchCoinData() {
//     try {
//         yield call(getcoindata); 
//         yield put(userActions.resetUser());
//     } catch (e) {
//         yield put(actions.failLogout('Oups! Error occurs, please try again later.'));
//     }
// }

// export function* fetchCoinDataSaga() {
//     alert('123')
//     yield takeEvery(types.FETCH_COIN_DATA, fetchCoinData);
// }


export function* fetchCoinData() {
   
    try {
        // alert(12345)
        // const coindata = yield call(getcoindata);
        const coindata = yield call(getcoindata);
        console.log('888888888888888888888888888', coindata);
        yield put(actions.fetchCoinDataSuccess(coindata));
    } catch (e) {
        // alert(123)
        // yield put(actions.failUser());
    }
}
export function* fetchCoinDataSaga() {
  
    yield takeEvery(types.FETCH_COIN_DATA, fetchCoinData);
}





