import axiosInstance from './requestBuilder';


export const getcoindata = () => {
    // return axiosInstance.get('wss://demo.openware.com/api/v2/ranger/public/?stream=global.tickers')
    //     .then(response => response.data);
};
 


export const getcurrency = () => {
    return axiosInstance.get(
        'http://www.app.local/api/v2/peatio/public/currencies',
    )
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};
