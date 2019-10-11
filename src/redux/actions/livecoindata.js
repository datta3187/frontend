import { FETCH_COIN_DATA,FETCH_COIN_DATA_SUCCESS,FETCH_COIN_DATA_FAIL } from '../constants/actions';



export const fetchCoinData = () => {  
    return { type: FETCH_COIN_DATA };
};
export const fetchCoinDataSuccess = (data) => { 
    alert(1)
    return { type: FETCH_COIN_DATA_SUCCESS ,payload:{data}};
};