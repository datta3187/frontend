import axiosInstance from './requestBuilder';


export const getWalletAddress = id => {
    return axiosInstance.get(`/peatio/account/deposit_address/${id}`)
        .then(response => response.data);
};

const getBalances = () => {
    return axiosInstance.get('/peatio/account/balances')
        .then(response => response.data);
};

const getCurrencies = () => {
    return axiosInstance.get('/peatio/public/currencies')
        .then(response => response.data);
};

export const getWalletData = async () => {
    return await Promise.all([getBalances(), getCurrencies()]);
};
