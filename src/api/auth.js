import axiosInstance from './requestBuilder';

export const logoutUser = () => {
    return axiosInstance.delete('/barong/identity/sessions')
        .then(response => response.data);
};

export const loginUser = (payload) => {
    return axiosInstance.post(
        '/barong/identity/sessions',
        payload
    )
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};
