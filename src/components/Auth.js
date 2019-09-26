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
        let result = JSON.stringify(res);
        localStorage.setItem("phone", result);
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
        let result = JSON.stringify(res);
        localStorage.setItem("document", result);
    };

    getUser = () => {
        return JSON.parse(localStorage.getItem('user'));
    };
}
