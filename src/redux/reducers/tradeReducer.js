import {MARKET} from "../constants/actions";

const  initialState = {
    market: ''
}

function tradeReducer(state = initialState, action) {
    switch (action.type) {
        case MARKET: {
            return { ...state, market: action.market };
        }
        default:
            return state;
    }
}

export default tradeReducer;