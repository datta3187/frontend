import * as actionTypes from "./actionTypes";

export const addMarketTrade = payload => {
  return {
    type: actionTypes.MARKET_TRADE,
    data: payload
  };
};

export const addMyTrade = payload => {
  return {
    type: actionTypes.MY_TRADE,
    data: payload
  };
};
