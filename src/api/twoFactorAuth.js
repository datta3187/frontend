import axiosInstance from "./requestBuilder";

export const twoFactorAuth = (code) => {
    return axiosInstance.post(
        '/resource/otp/verify',
        { code }
    )
    .then(response => response.data)
    .catch(error => {
        throw error;
    });
};
