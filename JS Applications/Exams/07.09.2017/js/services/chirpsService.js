let chirps = (() => {
    function loadFollowersChirps(subs) {
        let endpoint = `chirps?query={"author":{"$in": [${subs}]}}&sort={"_kmd.ect": -1}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }
    
    function loadAllChirpsByUsername(username) {
        let endpoint = `chirps?query={"author":"${username}"}&sort={"_kmd.ect": -1}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }
    
    function createChirp(text, author) {
        let data = { text, author };

        return remote.post('appdata', 'chirps', 'kinvey', data);
    }

    function deleteChirp(chirpId) {
        return remote.remove('appdata', `chirps/${chirpId}`, 'kinvey');
    }

    return {
        loadFollowersChirps,
        loadAllChirpsByUsername,
        createChirp,
        deleteChirp
    }
})();