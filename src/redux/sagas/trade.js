import { call, put, takeEvery } from 'redux-saga/effects';
import { submitOrder } from '../../api/trade';
import * as types from '../constants/actions';
import { toast } from 'react-toastify';

export function* placeOrder(payload) {
    try {
        let order = yield call(submitOrder, payload);
        debugger
        if (order){
            console.log('Hello');
        }


    } catch (e) {
        toast.error(e);

    }
}

export function* placeOrderSaga() {
    yield takeEvery(types.ADD_ORDER, placeOrder);
}
