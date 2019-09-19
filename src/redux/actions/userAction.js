import * as actionTypes from "./actionTypes";

export const saveUser = data => {
  return {
    type: actionTypes.SAVE_USER,
    User: data
  };
};
