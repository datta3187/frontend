import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/auth';
import * as userActions from '../actions/user';
import * as types from '../constants/actions';
import { push } from 'connected-react-router';
import { logoutUser, loginUser } from '../../api/auth';
import { fetchUser } from './user';
import { toast } from 'react-toastify';

export function* fetchLogout() {
    try {
        yield call(logoutUser);
        sessionStorage.clear();
        yield put(userActions.resetUser());
    } catch (e) {
        yield put(actions.failLogout('Oups! Error occurs, please try again later.'));
    }
}

export function* fetchLogoutSaga() {
    yield takeEvery(types.FETCH_LOGOUT, fetchLogout);
}

export function* fetchLogin({ payload: { email, password, captcha_response } }) {
    try {
        var auth = yield call(loginUser, email, password, captcha_response);
        if (auth) {
            yield call(fetchUser);
            yield put(push('/settings'));
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