import axiosInstance from './requestBuilder';


export const postNewWithdraws = data => {
    return axiosInstance.post('/peatio/account/withdraws', data)
        .then(response => response.data);
};
