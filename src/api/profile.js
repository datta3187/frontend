import axiosInstance from './requestBuilder';

export const setKycProfile = (payload) => {
    debugger
    return axiosInstance.post(
        '/barong/resource/profiles',
        payload
    )
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};

export const fetchKycProfile = () => {
    return axiosInstance.get(
        '/barong/resource/profiles/me'
    )
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};

