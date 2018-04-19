let auth = (() => {
    function saveSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authtoken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let username = userInfo.username;
        sessionStorage.setItem('username', username);
    }

    function isAuth() {
        return sessionStorage.getItem('authtoken') !== null;
    }

    function login(username, password) {
        let userData = {
            username,
            password
        };

        return remote.post('user', 'login', 'basic', userData);
    }

    function register(username, password) {
        let userData = {
            username,
            password,
        };

        return remote.post('user', '', 'basic', userData);
    }

    function logout() {
        let logoutData = {
            authToken: sessionStorage.getItem('authtoken')
        };

        return remote.post('user', '_logout', 'kinvey', logoutData);
    }

    return {
        login,
        register,
        logout,
        saveSession,
        isAuth,
    }
})();