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