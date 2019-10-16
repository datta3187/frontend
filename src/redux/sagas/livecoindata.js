import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/livecoindata';
import * as types from '../constants/actions';
import { getUser } from '../../api/user';
import { getcoindata } from '../../api/livecoindata';
import { getcurrency } from '../../api/livecoindata';

 
export function* fetchCoinData() {
   
    try { 
        const coindata = yield call(getcoindata);
        // console.log('888888888888888888888888888', coindata);
        yield put(actions.fetchCoinDataSuccess(coindata));
    } catch (e) {
        // yield put(actions.failUser());
    }
}

export function* fetchCurrencies() {
     
    const coindata = yield call(getcurrency); 
    yield put(actions.fetchCurrenciesSuccess(coindata));
}

export function* fetchCoinDataSaga() {
  
    yield takeEvery(types.FETCH_COIN_DATA, fetchCoinData);
}

export function* fetchCurrencySaga(){ 
    yield takeEvery(types.FETCH_CURRENCIES, fetchCurrencies);

}




