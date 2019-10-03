import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import socketReducer from "./socketReducer";


export default history =>
  combineReducers({
    router: connectRouter(history),
    tradeState: socketReducer
  });
