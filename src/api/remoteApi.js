import axios from 'axios';
import config from '../config';

export const remoteApi = (api_url, method_type, payload = 'undefined', base_url = 'barong') => {
    const URL = (base_url === 'barong' ? config.apiUrl : config.peatioUrl);

    let others = {
        method: method_type.toUpperCase(),
        headers: {
            'content-type': 'application/json'
        }
    };

    if (typeof payload !== "undefined" && method_type.toUpperCase() !== "GET") {
        others = Object.assign({}, others, { data: payload })
    }

    return axios(`${URL}/${api_url}`, others)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
};

// Kyc Api
export const onKyc = payload => {
    const URL = config.apiUrl;

    return axios(`${URL}/resource/documents`, {
        method: 'POST',
        headers: {
            'content-type': 'multipart/form-data'
        },
        data: payload
    })
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};
