import config from "../config";
import axios from "axios";

export const remoteApi = (api_url, method_type, payload) => {
    const URL = config.apiUrl;
    let others = {
        method: method_type.toUpperCase(),
        headers: {
            "content-type": "application/json"
        }
    }
    if(typeof payload !== "undefined" && method_type.toUpperCase() === "POST"){
        others = Object.assign({}, others, { payload: payload })
    }

    return axios(`${URL}/${api_url}`, others)
    .then(response => response.data)
    .catch(error => {
        throw error;
    });
}

export const peatioApi = (api_url, method_type, payload=undefined) => {
    const URL = config.peatioUrl;

    let others = {
        method: method_type.toUpperCase(),
        headers: {
            "content-type": "application/json"
        }
    }
    if(typeof payload !== "undefined" && method_type.toUpperCase() === "POST"){
        others = Object.assign({}, others, { payload: payload })
    }

    return axios(`${URL}/${api_url}`, others)
    .then(response => response.data)
    .catch(error => {
        throw error;
    });
}

