import * as actionTypes from "../actions/actionTypes";
const initialState = {
  User: {}
};

export default (state = initialState, action = {}) => {
  console.log("ACTION", action);
  switch (action.type) {
    case actionTypes.SAVE_USER:
      state.User = action.User;
      return {
        ...state
      };

    default:
      return { ...state };
  }
};
