import axiosInstance from "./requestBuilder";

export const twoFactorAuth = (code) => {
    return axiosInstance.post(
        '/resource/identity/sessions',
        { code }
    )
    .then(response => response.data)
    .catch(error => {
        throw error;
    });
};
