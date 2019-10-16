import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/twoFactorAuth';
import * as types from '../constants/twoFactorAuth';
import { push } from 'connected-react-router';
import { toast } from 'react-toastify';
import {loginUser} from "../../api/auth";
import {fetchUser} from "./user";

export function* fetch2fa(payload) {
    try {
        let record = JSON.parse(localStorage.getItem("userInfo"));
        record['otp_code'] = payload.otpCode;
        debugger
        let auth = yield call(loginUser, record);

        if (auth){
            localStorage.removeItem('userInfo');

            yield call(fetchUser);
            yield put(push('/settings'));

            toast.success('Logged In Successfully');
        }else{
            yield put(actions.fail2fa('Login Failed'));
        }
    } catch (e) {
        toast.error(e);
        yield put(actions.fail2fa(e));
    }
}

export function* twoFactorAuthSaga() {
    yield takeEvery(types.FETCH_2FA, fetch2fa);
}
