import axios from "axios";
import config from "../config";

export const onProfileSubmission = payload => {
    const URL = config.apiUrl;
    return axios(`${URL}barong/resource/profiles`, {
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


export const getProfile = payload => {
    const URL = config.apiUrl;
    return axios(`${URL}barong/resource/profiles/me`, {
        method: "GET",
        headers: {
            "content-type": "application/json" // whatever you want
        },
    })
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};
