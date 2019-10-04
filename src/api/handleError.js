import { toast } from 'react-toastify';
import store from '../redux/store';
import { fetchLogout } from '../redux/actions/auth';

export const handle = error => {
    if (error.response) {
        const err = error.response.data.errors[0];
        toast.error(err);
        if (error.response.status === 401) {
            store.dispatch(fetchLogout()); //dispatch logout for each 401 Unauthorized
        }
    }
    else {
        toast.error('' + error);
    }
}