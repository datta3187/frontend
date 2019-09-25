export default class Auth {

    setSession = (authResult) => {
        let res = JSON.stringify(authResult);
        localStorage.setItem('user', res);
    };

    // removes user details from localStorage
    logout = () => {
        localStorage.removeItem('user');
    };

    // checks if the user is authenticated
    isAuthenticated = () => {
        let user = JSON.parse(localStorage.getItem("user"));
        return (user != null)
    };
}
