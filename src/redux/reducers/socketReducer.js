import {ADD} from "../actions/actionTypes";


const initialState = {
    trades: getTrades()
}

function socketReducer(state= initialState, action){
    switch(action.type){
        case ADD:
            return Object.assign({}, state, {
                trades: Array.prototype.concat(action.data,  state.trades)
            });
        default:
            return state;
    }
    return state;
}

function getTrades(){
    try {
        const serializedState = localStorage.getItem("state");
        if (serializedState === null) {
            return [];
        } else {
            return JSON.parse(serializedState).tradeState.trades;
        }
    } catch (error) {
        return [];
    }
}

export default socketReducer;
