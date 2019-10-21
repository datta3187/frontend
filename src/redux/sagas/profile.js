import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/profile';
import * as types from '../constants/profile';
import { setKycProfile, fetchKycProfile } from '../../api/profile';
import { toast } from 'react-toastify';
import { push } from "connected-react-router";

export function* setProfile(payload) {
    debugger
    try {
        let response = yield call(setKycProfile, payload.data);
        if(response === 201){
            yield put(actions.successProfile());
            yield put(push('/kyc'));
        }
        else {
            yield put(actions.failSetProfile('Unable to set profile!'));
        }
    } catch (e) {
        toast.error(e);
        yield put(actions.failSetProfile(e));
    }
}

export function* setProfileSaga() {
    yield takeEvery(types.SET_PROFILE, setProfile);
}


export function* fetchProfile(payload) {
    try {
        let response = yield call(fetchKycProfile);
        if(response){
            yield put(actions.successFetchProfile());
            yield put(push('/kyc'));
        }
        else {
            yield put(actions.failFetchProfile()('Failed to fetch profile detail'));
        }
    } catch (e) {
        debugger
        yield put(push('/profile'));
        // toast.error(e);
        yield put(actions.failFetchProfile(e));
    }
}

export function* fetchProfileSaga() {
    yield takeEvery(types.FETCH_PROFILE, fetchProfile);
}

