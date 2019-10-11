import axiosInstance from './requestBuilder';


export const postNewWithdraws = data => {
    return axiosInstance.post('/account/withdraws', data)
        .then(response => response.data);
};
