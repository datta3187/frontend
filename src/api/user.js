import axiosInstance from './requestBuilder';


export const getUser = () => {
    return axiosInstance.get('/barong/resource/users/me')
        .then(response => response.data);
};

export const signupUser = (email, password, refferal_ID, language, captcha_response = '') => {
    
    return axiosInstance.post(
        '/barong/identity/users',
        { email, password, refferal_ID, language, captcha_response }
    )
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};