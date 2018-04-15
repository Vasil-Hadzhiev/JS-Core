let user = (() => {
    function loadUserByUsername(username) {
        let endpoint = `?query={"username":"${username}"}`;

        return remote.get('user', endpoint, 'kinvey');
    }

    function loadUserFollowers(username) {
        let endpoint = `?query={"subscriptions":"${username}"}`;

        return remote.get('user', endpoint, 'kinvey');
    }

    function loadAllUsers() {
        return remote.get('user', '', 'kinvey');
    }

    function modifyUser(userId, newSubs) {
        let modifiedUser = { subscriptions: newSubs };

        return requester.update('user', userId, 'kinvey', modifiedUser)
    }

    return {
        loadUserByUsername,
        loadUserFollowers,
        loadAllUsers,
        modifyUser
    }
})();