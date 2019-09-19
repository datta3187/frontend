import { combineReducers } from "redux";
import reduxState from "./contactReducer";
import { connectRouter } from "connected-react-router";

export default history =>
  combineReducers({
    router: connectRouter(history),
    reduxState: reduxState
  });
