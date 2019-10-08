import axiosInstance from './requestBuilder';

export const logoutUser = () => {
    return axiosInstance.delete('/api/v2/barong/identity/sessions')
        .then(response => response.data);
};

export const loginUser = (email, password, recaptcha_response = '', otp_code = '') => {
    return axiosInstance.post(
        '/api/v2/barong/identity/sessions',
        { email, password, otp_code, recaptcha_response }
    )
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};
