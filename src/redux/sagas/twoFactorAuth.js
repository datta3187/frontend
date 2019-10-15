import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/twoFactorAuth';
import * as types from '../constants/twoFactorAuth';
import { push } from 'connected-react-router';
import { twoFactorAuth } from '../../api/twoFactorAuth';
import { toast } from 'react-toastify';

export function* fetch2fa(payload) {
    debugger
    try {
        let g_2fa = yield call(twoFactorAuth, payload.otpCode);
        debugger

    } catch (e) {
        toast.error(e);
        yield put(actions.fail2fa());
    }
}

export function* twoFactorAuthSaga() {
    debugger
    yield takeEvery(types.FETCH_2FA, fetch2fa);
}
