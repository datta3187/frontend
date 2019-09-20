import axios from "axios";
import config from "../config";

// Kyc Api
export const onKyc = payload => {
    const URL = config.apiUrl;
    return axios(`${URL}api/v2/management/documents`, {
        method: "POST",
        headers: {
            "content-type": "application/json" // whatever you want
        },
        data: payload
    })
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};
