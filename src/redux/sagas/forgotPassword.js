import { call, put, takeEvery } from 'redux-saga/effects';
import { sendMailToRecoverPassword } from '../../api/forgotPassword';
import * as types from '../constants/forgotPassword';
import * as actions from "../actions/forgotPassword";
import { toast } from 'react-toastify';

export function* fetchForgotPassword(payload) {
    try {
        let resCode = yield call(sendMailToRecoverPassword, payload.data);
        if (resCode === 201){
            yield put(actions.openModal(false))
            toast.success("Password reset link has been sent on your email.");
        }else{
            yield put(actions.failForgotPassword('Failed! Please try again after sometime.'));
        }
    } catch (e) {
        toast.error(e);
    }
}

export function* fetchForgotPasswordSaga() {
    yield takeEvery(types.FETCH_FORGOT_PASSWORD, fetchForgotPassword);
}