import { call, put, takeEvery, select } from 'redux-saga/effects';
import {delay} from 'redux-saga/effects';
import * as actions from '../actions/withdraw';
import * as types from '../constants/withdraw';
import { postNewWithdraws } from '../../api/withdraw';
import { fetchHistory } from '../actions/history';


function* fetchSubmitWithdraw() {
  try {
    const params = yield select(state => {
      return {
        rid: state.withdraw.rid,
        amount: state.withdraw.amount,
        otp: state.withdraw.otp,
        currency: state.wallet.activeWallet
      };
    });
    yield call(postNewWithdraws, params);


    yield put(actions.successSubmitWithdraw());
    yield delay(1000);
    yield put(actions.clearWithdrawForm());
    yield put(fetchHistory('withdraws'));
  } catch (e) {
    yield put(actions.failSubmitWithdraw(e.message));
  }
}


export function* fetchSubmitWithdrawSaga() {
  yield takeEvery(types.FETCH_SUBMIT_WITHDRAW, fetchSubmitWithdraw);
}
