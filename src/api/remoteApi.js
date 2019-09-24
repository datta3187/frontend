import config from "../config";
import axios from "axios";

export const remoteApi = (api_url, method_type, payload) => {
    const URL = config.apiUrl;
    return axios(`${URL}/${api_url}`, {
        method: method_type.toUpperCase(),
        headers: {
            "content-type": "application/json" // whatever you want
        },
        data: payload
    })
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
}
