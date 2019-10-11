import axiosInstance from './requestBuilder';


export const getDepositHistory = id => {
    return axiosInstance.get(`/account/deposits?currency=${id}`)
        .then(response => response.data);
};

export const getWithdrawHistory = id => {
    return axiosInstance.get(`/account/withdraws?currency=${id}`)
        .then(response => response.data);
};

export const getHistory = async id => {
    return await Promise.all([getDepositHistory(id), getWithdrawHistory(id)]);
};
