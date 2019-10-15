import axiosInstance from './requestBuilder';

export const submitOrder = (data) => {
    return axiosInstance.post(
        '/peatio/market/orders',
        data
    )
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};

export const getMyOrders = (payload={}) => {
    let url = '/peatio/market/orders';
    if (Object.keys(payload).length !== 0) {
        url += filtersFormatted(payload.filters)
    }
    return axiosInstance.get(url)
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};

const filtersFormatted = (filters) => {
    let formattedFilters = '';
    let count = 1 ;
    let comingFilters = Object.entries(filters);

    for (let [key, value] of comingFilters) {
        formattedFilters += key + "=" + value;
        if(count < comingFilters.length) {
            formattedFilters += "&"
        }
        count ++;
    }
    if (formattedFilters !== ''){
        formattedFilters = "?" + formattedFilters;
    }
    return formattedFilters;
}