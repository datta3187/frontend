import axios from 'axios';
import store from '../redux/store';
import { fetchLogout } from '../redux/actions/auth';


const axiosInstance = axios.create({
    baseURL: 'http://www.app.local'
});


axiosInstance.interceptors.response.use(
    response => {
        return response;
    }, error => {
        if (error.response.status === 401) {
            store.dispatch(fetchLogout()); //dispatch logout for each 401 Unauthorized
        }
        return error;
    });

export default axiosInstance;

