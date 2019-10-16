import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/user';
import * as types from '../constants/actions';
import { getUser, signupUser } from '../../api/user';
import { push } from 'connected-react-router';

export function* fetchUser() {
    try {
        const user = yield call(getUser);
        yield put(actions.successUser(user));
    } catch (e) {
        yield put(actions.faildUser());
    }
}

export function* registerUser({ payload: { email, password, refid, lang, captcha_response } }) {
   console.log('saga reg : ', email, password, refid, lang, captcha_response )
    try {
        var user_register = yield call(signupUser, email, password, refid, lang, captcha_response = '');
        if (user_register) {
            // yield call(fetchUser);
            console.log('res reg : ', user_register)
            yield put(push('/login'));
            yield put(actions.successSignUpUser(user_register));
            // toast.success('Logged In Successfully');
        } else { 
            alert('error occured')
            yield put(actions.faildUser('Login Failed'));
        }
    } catch (e) {
        // toast.error(e);
        alert('error occured')
        yield put(actions.faildUser(e));
    }
}








export function* fetchUserSaga() {
    yield takeEvery(types.FETCH_USER, fetchUser);
}


export function* registerUserSaga() {
    yield takeEvery(types.REGISTER_USER, registerUser);
}


