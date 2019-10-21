import {
    SET_PROFILE,
    SUCCESS_PROFILE,
    FAIL_SET_PROFILE,
    FETCH_PROFILE,
    FAIL_FETCH_PROFILE,
    SUCCESS_FETCH_PROFILE
} from '../constants/profile';

export const setProfile = (payload) => {
    return { type: SET_PROFILE, loading: true, data: payload };
};

export const successProfile = () => {
    return { type: SUCCESS_PROFILE, loading: false };
};

export const failSetProfile = (message) => {
    return { type: FAIL_SET_PROFILE, payload: { message }  };
};

export const fetchProfile = () => {
    return { type: FETCH_PROFILE };
};

export const successFetchProfile = () => {
    return { type: SUCCESS_FETCH_PROFILE };
};

export const failFetchProfile = (message) => {
    return { type: FAIL_FETCH_PROFILE, payload: { message } };
};

