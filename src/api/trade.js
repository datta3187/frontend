import axiosInstance from './requestBuilder';

export const submitOrder = (payload) => {
    return axiosInstance.post(
        '/peatio/market/orders',
        payload
    )
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};