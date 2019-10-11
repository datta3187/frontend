import { call, put, takeEvery } from 'redux-saga/effects';
import { submitOrder } from '../../api/trade';
import * as types from '../constants/actions';
import { toast } from 'react-toastify';
import * as actions from "../actions/trade";

export function* placeOrder(payload) {
    try {
        let order = yield call(submitOrder, payload.data);

        if (order){
            toast.success("Order has been placed successfully.");
            yield put(actions.resetOrder());
        }


    } catch (e) {
        toast.error(e);
        // yield put(actions.failOrder(e));
    }
}

export function* placeOrderSaga() {
    yield takeEvery(types.ADD_ORDER, placeOrder);
}
