import axios from "axios";
import config from "../config";

export const onProfileSubmission = payload => {
    const URL = config.apiUrl;
    debugger
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