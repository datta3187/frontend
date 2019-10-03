import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import configureStore, { history } from "./redux/store/configureStore";
import { ConnectedRouter } from "connected-react-router";
import {TRADE_LIMIT} from "./redux/actions/actionTypes";

function saveToLocalStorage(state) {
  try {
    if(state.tradeState){
        //  market trades
        const serializedMarketTrade = JSON.stringify(state.tradeState.trades.slice(0,TRADE_LIMIT));
        localStorage.setItem("market_trades", serializedMarketTrade);

        // set my tradess
        const serializedMyTrade = JSON.stringify(state.tradeState.my_trades.slice(0,TRADE_LIMIT));
        localStorage.setItem("my_trades", serializedMyTrade);
    }else {

    }
  } catch (error) {
    console.log(error);
  }
}

const store = configureStore();
// use only if store redux  data in localStorage
store.subscribe(() => saveToLocalStorage(store.getState()));


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
