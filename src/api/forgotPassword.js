import axiosInstance from './requestBuilder';

export const sendMailToRecoverPassword = (payload) => {
    return axiosInstance.post(
        '/barong/identity/users/password/generate_code',
        payload
    )
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};
