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

export const getMyOrders = () => {
    return axiosInstance.get(
        '/peatio/market/orders'
    )
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};