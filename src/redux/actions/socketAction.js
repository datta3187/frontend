import * as actionTypes from "./actionTypes";

export const addTrade = payload => {
  return {
    type: actionTypes.ADD,
    data: payload
  };
};
