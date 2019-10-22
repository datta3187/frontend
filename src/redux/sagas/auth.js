import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/auth';
import { fetchDocs } from '../../api/kyc';
import * as userActions from '../actions/user';
import * as types from '../constants/auth';
import { push } from 'connected-react-router';
import { logoutUser, loginUser } from '../../api/auth';
import { fetchUser } from './user';
import { toast } from 'react-toastify';

export function* fetchLogout() {
    try {
        yield call(logoutUser);
        sessionStorage.clear();
        yield put(userActions.resetUser());
        yield put(push('/'));
    } catch (e) {
        yield put(actions.failLogout('Oops! Error occurs, please try again later.'));
    }
}

export function* fetchLogoutSaga() {
    yield takeEvery(types.FETCH_LOGOUT, fetchLogout);
}

export function* fetchLogin(payload) {
    try {
        let auth = yield call(loginUser, payload.data);
        if (auth && auth.gAuthStatus===0){
            localStorage.setItem('userInfo', JSON.stringify(payload.data));
            yield put(push('/two-factor'));
        }else if(auth){
            let next_path ;
            if (auth.level === 0){
                next_path ='/email-verification';
            }
            else if (auth.level === 1){
                next_path ='/profile';
            }
            else if(auth.level === 2){
                let docInfo = yield call(fetchDocs);
                if(docInfo.Data.length > 0){
                    next_path ='/settings';
                } else {
                    next_path ='/kyc';
                }
            }
            else{
                next_path ='/settings'
            }
            yield call(fetchUser);
            yield put(push(next_path));
            toast.success('Logged In Successfully');
        } else {
            yield put(actions.failLogin('Login Failed'));
        }
    } catch (e) {
        toast.error(e);
        yield put(actions.failLogin(e));
    }
}

export function* fetchLoginSaga() {
    yield takeEvery(types.FETCH_LOGIN, fetchLogin);
}
