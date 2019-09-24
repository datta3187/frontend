import axios from "axios";
import config from "../config";

// Kyc Api
export const onKyc = payload => {
    const URL = config.apiUrl;
    return axios(`${URL}/resource/documents`, {
        method: "POST",
        headers: {
            "content-type": "multipart/form-data" // whatever you want
        },
        data: payload
    })
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};
