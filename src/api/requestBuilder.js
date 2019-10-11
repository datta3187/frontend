import axios from 'axios';
import store from '../redux/store';
import config from '../config';
import { fetchLogout } from '../redux/actions/auth';


const axiosInstance = axios.create({
    baseURL: config.baseUrl
});


axiosInstance.interceptors.response.use(
    response => {
        return response;
    }, error => {
        if (error.response.status === 401) {
            store.dispatch(fetchLogout()); //dispatch logout for each 401 Unauthorized
        }
        if (error.response.data) {
            const err = error.response.data.errors[0];
            throw err;
        }
    });

export default axiosInstance;
