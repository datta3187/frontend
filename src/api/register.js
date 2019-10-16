import axiosInstance from './requestBuilder';

export const registerUser = (payload) => {
    return axiosInstance.post(
        '/barong/identity/users',
        payload
    )
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};
