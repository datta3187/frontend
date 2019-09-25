import axios from "axios";
import config from "../config";

export const onProfileSubmission = payload => {
    const URL = config.apiUrl;
    return axios(`${URL}/resource/profiles`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json" ,
            "Access-Control-Allow-Origin": "*"
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
    return axios(`${URL}/resource/profiles/me`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
    })
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};
