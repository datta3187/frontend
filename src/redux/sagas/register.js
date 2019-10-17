import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/register';
import * as types from '../constants/register';
import { registerUser } from '../../api/register';
import { toast } from 'react-toastify';
import {push} from "connected-react-router";

export function* fetchRegister(payload) {
    try {
        let response = yield call(registerUser, payload.data);
         if(response === 201){
             yield put(actions.successRegister());
             yield put(push('/email-verification', {email: payload.data.email}));
         }
         else {
            yield put(actions.failRegister('Register Failed'));
         }
    } catch (e) {
        toast.error(e);
        yield put(actions.failRegister(e));
    }
}

export function* fetchRegisterSaga() {
    yield takeEvery(types.FETCH_REGISTER, fetchRegister);
}
