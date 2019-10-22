// import axiosInstance from './requestBuilder';
//
// export const kycDocument = (payload) => {
//     debugger
//     return axiosInstance.post(
//         '/resource/documents',
//         payload,{
//
//         }
//     )
//         .then(response => response)
//         .catch(error => {
//             throw error;
//         });
// };

import axios from 'axios';
import config from '../config';

export const kycDocument = payload => {
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
