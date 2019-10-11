import axiosInstance from './requestBuilder';


export const getUser = () => {
    return axiosInstance.get('/barong/resource/users/me')
        .then(response => response.data);
};
