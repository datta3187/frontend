import { call, put, takeEvery } from 'redux-saga/effects';
import { submitOrder, getMyOrders } from '../../api/trade';
import * as types from '../constants/trade';
import { toast } from 'react-toastify';
import * as actions from "../actions/trade";
import {getUser} from "../../api/user";
import {ORDER_WAIT, ORDER_LIMIT} from "../constants/trade";

export function* placeOrder(payload) {
    try {
        let order = yield call(submitOrder, payload.data);
        if (order){
            yield put(actions.resetOrder(false));
            toast.success("Order has been placed successfully.");
            yield put(actions.resetOrder(true));
            yield put(actions.fetchOpenOrders({market: payload.data.market, state: ORDER_WAIT, limit: ORDER_LIMIT}))
        }
    } catch (e) {
        toast.error(e);
        // yield put(actions.failOrder(e));
    }
}

export function* placeOrderSaga() {
    yield takeEvery(types.ADD_ORDER, placeOrder);
}

// To get open Orders

export function* fetchOpenOrders(payload) {
    try {
        const user = yield call(getUser);
        let openOrders;
        if(user){
            openOrders = yield call(getMyOrders , payload);
        }
        else{
            openOrders =[]
        }
        yield put(actions.myOrders(openOrders));

    } catch (e) {
        toast.error(e);
        // yield put(actions.failOrder(e));
    }
}

export function* fetchOpenOrdersSaga() {
    yield takeEvery(types.FETCH_OPEN_ORDERS, fetchOpenOrders);
}

// To get All orders history

export function* fetchAllOrders(payload) {
    try {
        const user = yield call(getUser);
        let allOrders;
        if(user){
            allOrders = yield call(getMyOrders, payload);
        }
        else{
            allOrders =[]
        }
        yield put(actions.allOrders(allOrders));

    } catch (e) {
        toast.error(e);
        // yield put(actions.failOrder(e));
    }
}

export function* fetchAllOrdersSaga() {
    yield takeEvery(types.FETCH_ALL_ORDERS, fetchAllOrders);
}