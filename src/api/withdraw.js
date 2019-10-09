import axiosInstance from './requestBuilder';


export const postNewWithdraws = data => {
    return axiosInstance.post('/api/v2/peatio/account/withdraws', data)
        .then(response => response.data);
};
