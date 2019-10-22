import axiosInstance from './requestBuilder';
import axios from 'axios';
import config from '../config';

export const fetchDocs = () => {
    return axiosInstance.get(
        '/barong/resource/documents'
    )
        .then(response => response)
        .catch(error => {
            throw error;
        });
};

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

export const fetchDocuments = () => {

}
