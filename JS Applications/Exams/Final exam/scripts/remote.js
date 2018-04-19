let remote = (() => {
    const BASE_URL = 'https://baas.kinvey.com/';
    const APP_KEY = 'kid_BkeGAaehz';
    const APP_SECRET = 'fd4f12b8e31a4baba9580dc304c51e39';

    function makeAuth(type) {
        return type === 'basic'
            ?  'Basic ' + btoa(APP_KEY + ':' + APP_SECRET)
            :  'Kinvey ' + sessionStorage.getItem('authtoken');
    }

    function makeRequest(method, module, endpoint, auth) {
        return req = {
            method,
            url: BASE_URL + module + '/' + APP_KEY + '/' + endpoint,
            headers: {
                'Authorization': makeAuth(auth)
            }
        };
    }

    function get (module, endpoint, auth) {
        return $.ajax(makeRequest('GET', module, endpoint, auth));
    }

    function post (module, endpoint, auth, data) {
        let req = makeRequest('POST', module, endpoint, auth);
        req.data = data;
        return $.ajax(req);
    }

    function update(module, endpoint, auth, data) {
        let req = makeRequest('PUT', module, endpoint, auth);
        req.data = data;
        return $.ajax(req);
    }

    function remove (module, endpoint, auth) {
        return $.ajax(makeRequest('DELETE', module, endpoint, auth));
    }

    return {
        get,
        post,
        update,
        remove
    }
})();