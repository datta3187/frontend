import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/kyc';
import * as types from '../constants/kyc';
import { kycDocument } from '../../api/kyc';
import { toast } from 'react-toastify';
import {push} from "connected-react-router";

export function* submitKyc(payload) {
    try {
        let response = yield call(kycDocument, payload.data);
        debugger
        if(response === 201){
            yield put(actions.successSubmitKyc());
            yield put(push('/settings'));
        }
        else {
            yield put(actions.failSubmitKyc('Unable to upload documents!'));
        }
    } catch (e) {
        toast.error(e);
        yield put(actions.failSubmitKyc(e));
    }
}

export function* submitKycSaga() {
    yield takeEvery(types.SUBMIT_KYC, submitKyc);
}
