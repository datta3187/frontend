import { FETCH_COIN_DATA,FETCH_COIN_DATA_SUCCESS,FETCH_COIN_DATA_FAIL ,FETCH_CURRENCIES, FETCH_CURRENCIES_SUCCESS} from '../constants/actions';



export const fetchCoinData = () => {  
    return { type: FETCH_COIN_DATA };
};
export const fetchCoinDataSuccess = (data) => { 
 
    return { type: FETCH_COIN_DATA_SUCCESS ,payload:{data}};
};
export const fetchCurrencies = ()=>{
    return { type: FETCH_CURRENCIES };
}

export const fetchCurrenciesSuccess = (data)=>{
    return { type: FETCH_CURRENCIES_SUCCESS, payload:data };
}


