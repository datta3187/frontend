import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/kyc';
import * as types from '../constants/kyc';
import { kycDocument, fetchDocs } from '../../api/kyc';
import { toast } from 'react-toastify';
import {push} from "connected-react-router";

export function* submitKyc(payload) {
    try {
        let response = yield call(kycDocument, payload.data);
        if(response === 201){
            yield put(actions.successSubmitKyc());
            toast.success('Uploaded successfully');
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


export function* fetchDocuments(){
    try {
        let documents = yield call(fetchDocs);
        if(documents){
            yield put(actions.refreshDocuments(documents));
        }
    } catch (e) {
        yield put(actions.failFetchDocument(e));
    }
}

export function* fetchDocumentsSaga() {
    yield takeEvery(types.FETCH_DOCUMENTS, fetchDocuments);
}