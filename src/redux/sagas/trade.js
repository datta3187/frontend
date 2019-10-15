import { call, put, takeEvery } from 'redux-saga/effects';
import { submitOrder, getMyOrders } from '../../api/trade';
import * as types from '../constants/actions';
import { toast } from 'react-toastify';
import * as actions from "../actions/trade";
import {fetchUser} from "./user";

export function* placeOrder(payload) {
    try {
        let order = yield call(submitOrder, payload.data);
        if (order){
            yield put(actions.resetOrder(false));
            toast.success("Order has been placed successfully.");
            yield put(actions.resetOrder(true));
        }
    } catch (e) {
        toast.error(e);
        // yield put(actions.failOrder(e));
    }
}

export function* placeOrderSaga() {
    yield takeEvery(types.ADD_ORDER, placeOrder);
}

export function* fetchOrders() {
    try {
        debugger
        const user = yield call(fetchUser);
        let Orders;
        if(user){
            console.log('calling fetch my orders in saga');
            Orders = yield call(getMyOrders);
        }
        else{
            Orders =[]
        }
        yield put(actions.myOrders(Orders));

    } catch (e) {
        toast.error(e);
        // yield put(actions.failOrder(e));
    }
}

export function* fetchOrdersSaga() {
    yield takeEvery(types.FETCH_ORDERS, fetchOrders);
}