// import * as profileApi from "../api/profileApi";
import * as Api from "../api/remoteApi";

export default class Auth {

    setSession = (authResult) => {
        let res = JSON.stringify(authResult);
        localStorage.setItem('user', res);
    };

    // removes user details from localStorage
    logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('phone');
        localStorage.removeItem('profile');
        localStorage.removeItem('document');
    };

    // checks if the user is authenticated
    isAuthenticated = () => {
        let user = JSON.parse(localStorage.getItem("user"));
        return (user != null)
    };

    getPhone = () => {
        return JSON.parse(localStorage.getItem('phone'));
    };

    setPhone = (res) => {
        if (res && res.length) {
            let result = JSON.stringify(res);
            localStorage.setItem("phone", result);
        }
    };

    getProfile = () => {
        return JSON.parse(localStorage.getItem('profile'));
    };

    setProfile = (res) => {
        let result = JSON.stringify(res);
        localStorage.setItem("profile", result);
    };

    getDocument = () => {
        return JSON.parse(localStorage.getItem('document'));
    };

    setDocument = (res) => {
        if (res && res.length) {
            let result = JSON.stringify(res);
            localStorage.setItem("document", result);
        }
    };

    getUser = () => {
        return JSON.parse(localStorage.getItem('user'));
    };

    fetchProfile = e => {
        let api_url = 'resource/profiles/me';
        Api.remoteApi(api_url, 'GET', {} )
        // Api.getProfile()
            .then(res => {
                this.setProfile(res)
            })
            .catch(error => {
                console.log(error)
            });
    };

    fetchPhones = e => {
        let api_url = 'resource/phones';
        Api.remoteApi(api_url, 'get', {})
            .then(res => {
                this.setPhone(res);
            })
            .catch(error => {
                if (error.response) {
                    console.error(error.response.data.errors[0]);
                } else {
                    console.error("" + error);
                }
            });
    };

    fetchDocuments = e => {
        let api_url = 'resource/documents';
        Api.remoteApi(api_url, 'get', {})
            .then(res => {
                this.setDocument(res);
            })
            .catch(error => {
                if (error.response) {
                    console.error(error.response.data.errors[0]);
                } else {
                    console.error("" + error);
                }
            });
    };
}
